import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../shared/task.service";


@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  constructor(protected taskService:TaskService) {
  }

  ngOnInit(): void {



  }

}
