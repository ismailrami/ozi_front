import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule) }
];
 
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true, 
            }
        )
    ],
    exports: [ RouterModule ],
    providers: []
})
 
export class AppRoutingModule { }