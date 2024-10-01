import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmationMessageComponent } from './components/shared/confirmation-message/confirmation-message.component';

import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddEditContactComponent,
    ListContactComponent,
    NavbarComponent,
    ConfirmationMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
