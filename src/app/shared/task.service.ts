import {Injectable, Input, OnInit} from '@angular/core';
import {Document, Root} from "../model/documents";
import {HttpTaskService} from "./http/http-task.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

  @Input() httpTaskList: Array<Document> = [];

  constructor(private taskHttp: HttpTaskService) {
    this.refreshTasks();

  }


  ngOnInit(): void {


  }

  refreshTasks(): Array<Document> {
    setTimeout(() =>
      this.taskHttp.getAllTasks().subscribe(
        (tasks: Root) => {
          this.httpTaskList = tasks.documents;
        }), 500);
    console.log(this.httpTaskList);
    return this.httpTaskList;
  }

  doneTask(task: Document | undefined){
    this.taskHttp.moveTaskToDone(task).subscribe();
    this.refreshTasks();
  }

  restoreTask(task: Document | undefined) {
    this.taskHttp.moveTaskToAdded(task).subscribe();
    this.refreshTasks();
  }

  deleteTask(task: Document | undefined) {
    this.taskHttp.moveTaskToDeleted(task).subscribe();
    this.refreshTasks();
  }

  forceDeleteTask(task: Document | undefined) {
    this.taskHttp.deleteTask(task).subscribe();
    this.refreshTasks();
  }
  addTask(task: Document | undefined) {
    this.taskHttp.insertOneTask(task).subscribe();
    this.refreshTasks();
  }
    updateTask(task: Document | undefined) {
    this.taskHttp.updateTask(task).subscribe();
    this.refreshTasks();
  }


}
