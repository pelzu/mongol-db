import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../shared/task.service";
import {Document, Root} from "../../model/documents";
import {HttpTaskService} from "../../shared/http-task.service";

@Component({
  selector: 'app-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.css']
})
export class DeletedTaskComponent implements OnInit {
  @Input() deletedTasks:Array<Document>=[] ;

  constructor() {
  }

  ngOnInit(): void {
  }




}
