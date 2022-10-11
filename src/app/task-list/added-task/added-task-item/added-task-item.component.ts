import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/documents";

@Component({
  selector: 'app-added-task-item',
  templateUrl: './added-task-item.component.html',
  styleUrls: ['./added-task-item.component.css']
})
export class AddedTaskItemComponent implements OnInit {
  @Input() toDoTask: Document|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  checkStatus() :boolean{
    return this.toDoTask?.taskStatus==1;

  }

  deleteTask() {

  }
}
