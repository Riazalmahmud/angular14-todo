import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactManagerComponent } from './component/contact-manager/contact-manager.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import { EditContactComponent } from './component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './component/view-contact/view-contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SpninerComponent } from './component/spniner/spniner.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    PageNotFoundComponent,
    SpninerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
