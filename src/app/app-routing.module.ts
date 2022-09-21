import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'contacts/admin',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: ContactManagerComponent,
  },
  {
    path: 'contacts/add',
    component: AddContactComponent,
  },
  {
    path: 'contacts/edit/:contactId',
    component: EditContactComponent,
  },
  {
    path: 'contacts/view/:contactId',
    component: ViewContactComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
