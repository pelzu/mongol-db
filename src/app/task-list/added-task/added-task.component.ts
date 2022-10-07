import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";
import {Document, Root} from "../../model/documents";
import {TaskService} from "../../shared/task.service";
import {of} from "rxjs";
import * as http from "http";


@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit,OnChanges {
  addedTasks: Document[] | undefined;


  constructor(private http: HttpTaskService, private taskService: TaskService) {


  }

  ngOnChanges(changes: SimpleChanges): void {
  }


  ngOnInit(): void {
    this.getTaskFromDB();
  }
  getTaskFromDB () {
    this.http.getAllTasks().subscribe((tasks: Root) => {
      this.addedTasks = tasks.documents;
    });
  }


  getAddedTasks() {
    this.getTaskFromDB();
  }

  deleteTask() {

  }

  doneTask() {

  }
}
