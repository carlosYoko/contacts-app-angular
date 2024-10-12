import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditContactComponent } from './components/add-edit-contact/add-edit-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';

const routes: Routes = [
  { path: '', component: ListContactComponent },
  { path: 'add', component: AddEditContactComponent },
  { path: 'edit/:id', component: AddEditContactComponent },
  { path: '**', component: ListContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
