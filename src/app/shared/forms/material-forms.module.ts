import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material/material.module';

import { FileFormComponent } from './file-form/file-form.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { LoginFormComponent } from './login-form/login-form.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        FileFormComponent,
        LoginFormComponent,
        PersonalFormComponent,
    ],
    exports:[
        MaterialModule,
        FileFormComponent,
        PersonalFormComponent,
        LoginFormComponent,
    ],
    entryComponents: [
    ]
})

export class MaterialFormsModule { }
