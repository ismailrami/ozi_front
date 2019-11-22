import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { LoginFormComponent } from '@app/shared/forms/login-form/login-form.component';

const contactsRoutes: Routes = [
    // 1st Route
    {  path: '', component: ContactListComponent },
    // 2nd Route
    {  path: 'add-contact', component: NewContactComponent , pathMatch : 'full'},
    //3rd path
    //{ path: 'inteview', component: intervieComponent }

    { path: 'login', component: LoginFormComponent, pathMatch : 'full' }
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
