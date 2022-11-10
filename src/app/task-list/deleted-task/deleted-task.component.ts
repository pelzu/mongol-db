import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Document, Root} from "../../model/documents";
import {TaskService} from "../../shared/task.service";


@Component({
  selector: 'app-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.css']
})
export class DeletedTaskComponent implements OnInit {




  constructor(protected taskService:TaskService) {
  }

  ngOnInit(): void {
  }



}
