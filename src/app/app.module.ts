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
import {HttpTaskService} from "./shared/http-task.service";
import {TaskService} from "./shared/task.service";
import { AddedTaskItemComponent } from './task-list/added-task/added-task-item/added-task-item.component';
import { TestTaskComponent } from './task-list/test-task/test-task.component';
import { TestTaskItemComponent } from './task-list/test-task/test-task-item/test-task-item.component';
import { DoneTaskItemComponent } from './task-list/done-task/done-task-item/done-task-item.component';
import { DeletedTaskItemComponent } from './task-list/deleted-task/deleted-task-item/deleted-task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddedTaskComponent,
    DoneTaskComponent,
    DeletedTaskComponent,
    InputTaskComponent,
    AddedTaskItemComponent,
    TestTaskComponent,
    TestTaskItemComponent,
    DoneTaskItemComponent,
    DeletedTaskItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpTaskService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
