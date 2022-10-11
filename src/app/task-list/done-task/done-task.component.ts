import {Component, Input, OnInit} from '@angular/core';
import {Document, Root} from "../../model/documents";


@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  @Input() doneTasks:Array<Document>= [] ;
  constructor() {
  }

  ngOnInit(): void {

  }
}
