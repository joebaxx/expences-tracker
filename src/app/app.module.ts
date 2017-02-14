import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ExpencesFormComponent } from './expences-form/expences-form.component';
import { ExpencesListComponent } from './expences-list/expences-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpencesFormComponent,
    ExpencesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
