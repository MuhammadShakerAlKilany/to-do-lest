import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoLestComponent } from './to-do-lest/to-do-lest.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';
import { StrikeToDoPipe } from './pips/strike-to-do.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToDoLestComponent,
    AddToDoComponent,
    StrikeToDoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
