import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const contactsRoutes: Routes = [
    // 1st Route
    {  path: '', component: ContactListComponent },
    // 2nd Route
    {  path: 'add-contact', component: NewContactComponent , pathMatch : 'full'},
    //3rd path 
    //{ path: 'edit-contact', component: ContactDetailComponent}
];
 
@NgModule({
    imports: [
        RouterModule.forChild(contactsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
 
export class ContactsRoutingModule { }