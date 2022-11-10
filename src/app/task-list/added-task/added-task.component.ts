import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../model/documents";
import {TaskService} from "../../shared/task.service";


@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit {


  constructor(protected taskService: TaskService) {
  }

  ngOnInit(): void {


  }


}
