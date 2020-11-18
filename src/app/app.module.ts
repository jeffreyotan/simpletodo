import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewtaskComponent } from './components/newtask.component';
import { TasklistComponent } from './components/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    NewtaskComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
