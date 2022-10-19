import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Document, Root} from "../../model/documents";


@Component({
  selector: 'app-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.css']
})
export class DeletedTaskComponent implements OnInit {
  @Input() deletedTasks:Array<Document>=[] ;
  @Output() refreshTaskList=new EventEmitter() ;


  constructor() {
  }

  ngOnInit(): void {
  }


  trigDeletedTask() {
    this.refreshTaskList.emit();
  }
}
