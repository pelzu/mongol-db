import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/documents";

@Component({
  selector: 'app-deleted-task-item',
  templateUrl: './deleted-task-item.component.html',
  styleUrls: ['./deleted-task-item.component.css']
})
export class DeletedTaskItemComponent implements OnInit {
  @Input()deletedTask: Document|undefined;

  constructor() { }

  ngOnInit(): void {
  }

  checkStatus():boolean {
return this.deletedTask?.taskStatus==3 ;

  }

  forceDeleteTask() {

  }

  restoreTask() {

  }
}
