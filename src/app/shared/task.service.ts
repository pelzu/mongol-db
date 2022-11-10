import {Injectable, Input, OnInit} from '@angular/core';
import {Document, Root} from "../model/documents";
import {HttpTaskService} from "./http/http-task.service";
import {delay, Observable} from "rxjs";


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
    this.taskHttp.getAllTasks().subscribe((tasks: Root) => {
      this.httpTaskList = tasks.documents;
    });
    console.log(this.httpTaskList);
    return this.httpTaskList;
  }

  doneTask(task: Document | undefined): Observable<any> {


    return this.taskHttp.moveTaskToDone(task);
  }

  restoreTask(task: Document | undefined): Observable<any> {

    return this.taskHttp.moveTaskToAdded(task);


  }

  deleteTask(task: Document | undefined): Observable<any> {

    return this.taskHttp.moveTaskToDeleted(task);


  }

  forceDeleteTask(task: Document | undefined) {

    this.taskHttp.deleteTask(task).subscribe();


  }

}
