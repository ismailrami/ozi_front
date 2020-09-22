import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatDialog} from '@angular/material';
import { MatTableDataSource } from '@angular/material';


import { Contact } from '../shared/contact';
import { ApiService } from '@app/core/services/api.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    displayedColumns: string[];
    dataSource = new MatTableDataSource();
    screenHeight: any;
    screenWidth: any;
    is_loaded: Promise<boolean>;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    @HostListener('window:resize', ['$event'])
        onResize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.setDisplayedColumns();
    }

    constructor(
        private dialog: MatDialog,
        private api : ApiService) {

        this.screenHeight = window.screen.height;
        this.screenWidth = window.screen.width;
        this.setDisplayedColumns();
    }

    ngOnInit() {
        this.loadContacts();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    loadContacts() {
        this.api.getUsers().subscribe(data => {

            this.dataSource.data = data;

            this.is_loaded= Promise.resolve(true)
        });
    }

    editContact(id: number): void {


    }

    deleteContact(contact: Contact): void {

    }


    /**
     * Update a list of table columns to be displayed based on the width of the screen.
     */
    setDisplayedColumns() {
        if (this.screenWidth < 420) {
            this.displayedColumns = ['email', 'first_name','last_name', 'function', 'status' ,'action'];
        }
        else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
            this.displayedColumns = ['email', 'first_name','last_name', 'function','status', 'action'];
        }
        else {
            this.displayedColumns = ['email', 'first_name','last_name', 'function','status', 'action'];
        }
    }
}
