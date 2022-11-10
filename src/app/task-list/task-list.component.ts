import {Component, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import {HttpTaskService} from "../shared/http/http-task.service";
import {Document, Root} from "../model/documents";
import {delay} from "rxjs";
import {TaskService} from "../shared/task.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {



  constructor(protected taskService:TaskService) {



  }



  ngOnInit(): void {
  }
  getTaskFromDB() {
    this.taskService.refreshTasks() ;

  }


}
