import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddedTaskComponent } from './task-list/added-task/added-task.component';
import { DoneTaskComponent } from './task-list/done-task/done-task.component';
import { DeletedTaskComponent } from './task-list/deleted-task/deleted-task.component';
import { InputTaskComponent } from './task-list/input-task/input-task.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddedTaskComponent,
    DoneTaskComponent,
    DeletedTaskComponent,
    InputTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
