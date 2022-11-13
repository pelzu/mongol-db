import {Component, OnInit,} from '@angular/core';
import {TaskService} from "../shared/task.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  constructor(protected taskService: TaskService) {


  }


  ngOnInit(): void {
  }

  getTaskFromDB() {
    this.taskService.refreshTasks();

  }


}
