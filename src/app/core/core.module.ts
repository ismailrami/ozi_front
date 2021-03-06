import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@app/material/material.module';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastService } from './toast/toast.service';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        MainLayoutComponent,
        NavbarComponent,
        ToolbarComponent
    ],
    exports: [
        MainLayoutComponent
    ],
    providers: [
        ToastService
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
