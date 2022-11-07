import {Injectable, OnInit} from '@angular/core';
import {Document, Root} from "../model/documents";
import {HttpTaskService} from "./http/http-task.service";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {
  httpTaskList: Array<Document> = [];

  constructor(private taskHttp: HttpTaskService) {
    this.refreshTasks();

  }

  ngOnInit(): void {
  }

  refreshTasks(): Array<Document> {
    this.taskHttp.getAllTasks().subscribe((tasks: Root) => {
      this.httpTaskList = tasks.documents;
    });
    return this.httpTaskList;
  }

  doneTask(task: Document | undefined): Observable<any> {
    this.refreshTasks();

    return this.taskHttp.moveTaskToDone(task);
  }

  restoreTask(task: Document | undefined): Observable<any> {
    this.refreshTasks();

    return this.taskHttp.moveTaskToAdded(task);


  }

  deleteTask(task: Document | undefined): Observable<any> {
    this.refreshTasks();

    return this.taskHttp.moveTaskToDeleted(task);


  }

  forceDeleteTask(task: Document | undefined): Observable<any> {
    this.refreshTasks();

    return this.taskHttp.deleteTask(task);

  }
}
