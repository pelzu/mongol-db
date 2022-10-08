import {Component, OnInit} from '@angular/core';
import {Document, Root} from "../../model/documents";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpTaskService} from "../../shared/http-task.service";

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  doneTasks:Array<Document>= [] ;
  constructor(private http: HttpTaskService) {
  }

  ngOnInit(): void {
    this.getDoneTask() ;
  }
  getDoneTask () {
    this.http.getAllTasks().subscribe((tasks: Root) => {
      this.doneTasks = tasks.documents;
    });
  }

  restoreTask(task: Document)  {
    this.http.moveTaskToAdded(task).subscribe(data => {
      setTimeout(() => {
        this.getDoneTask();
      }, 500)
    });

  }

  moveToDeleteTask(task: Document) {
    this.http.moveTaskToDeleted(task).subscribe(data => {
      setTimeout(() => {
        this.getDoneTask();
      }, 500)
    });
  }
}
