import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';

@Component ({
    selector:     'app-new-contact',
    templateUrl: './new-contact.component.html',
    styleUrls: ['./new-contact.component.scss']
})

export class NewContactComponent implements OnInit {

    personalForm: FormGroup;
    fileForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private api: ApiService) { }

    ngOnInit() {
        this.buildPersonalForm();
        this.buildFileForm();
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

    buildFileForm(): void {
        this.fileForm = this.formBuilder.group({
            'file': ['', Validators.required],
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
     * Return true if at least either personForm or fileForm is invalid
     */
    invalidForms(): boolean {
        return (this.personalForm.invalid ||
            this.fileForm.invalid);
    }


    getContact() {
        return { ...this.personalForm.value,...this.fileForm.value };
    }

}
