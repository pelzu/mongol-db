import { Component, OnInit,} from '@angular/core';
import {HttpTaskService} from "../shared/http/http-task.service";
import {Document, Root} from "../model/documents";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  httpTaskList:Array<Document> = [] ;


  constructor(private http:HttpTaskService) {
    this.getTaskFromDB();


  }

  ngOnInit(): void {
  }
  getTaskFromDB() {
    this.http.getAllTasks().subscribe((tasks: Root) => {
      this.httpTaskList = tasks.documents;
    });
  }


}
