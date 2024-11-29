import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonDeleteComponent } from './components/person-delete/person-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonEditComponent,
    PersonDeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
