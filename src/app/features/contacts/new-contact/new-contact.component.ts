import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Contact } from '../shared/contact';
import { ApiService } from '../../../core/services/api.service';

@Component ({
    selector:     'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.scss']
})

export class NewContactComponent implements OnInit {

    title = 'Create Contact';
    personalForm: FormGroup;
    addressForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private api: ApiService) { }

    ngOnInit() {
        this.buildPersonalForm();
        this.buildAddressForm();
    }

    buildPersonalForm(): void {
        this.personalForm = this.formBuilder.group({
            'first_name': ['', Validators.required],
            'last_name': ['', Validators.required],
            'email': ['', [Validators.required, Validators.email]],
            'city': [''],
            'tel_mobile': ['', Validators.required],
            'driver_licence': ['', Validators.required],
            'function': ['', Validators.required],
            'source': ['', Validators.required],
            'pre_sal' : ['', Validators.required],
            'act_sal': ['', Validators.required],
            'mobility' : ['', Validators.required],
            'ref_com': [''],
            'rh_com': [''],
            'disponibility': ['', Validators.required],
            'status' : ['', Validators.required]
        });
    }

    buildAddressForm(): void {
        this.addressForm = this.formBuilder.group({
            'street': ['', Validators.required],
            'city': ['', Validators.required],
            'state': ['', Validators.required ],
            'zip': ['', Validators.required],
        });
    }

    save() {
        /* if (this.invalidForms())
            return; */

      const newContact = this.getContact();
        this.api.addUser(newContact).subscribe(result => {
            if (result) {
                this.router.navigate(['/']);
            }
        });
        console.log(this.personalForm.value);
    }

    /**
     * Return true if at least either personForm or addressForm is invalid
     */
    invalidForms(): boolean {
        return (this.personalForm.invalid ||
            this.addressForm.invalid);
    }


    getContact(): Contact {
        return { ...this.personalForm.value,...this.addressForm.value };
    }

}
