import {Component, Input, OnInit} from '@angular/core';
import {Document, Root} from "../../model/documents";

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.css']
})
export class TestTaskComponent implements OnInit {
  @Input()testTaskList:Array<Document>=[] ;
  constructor() {
  }

  ngOnInit(): void {


  }

}
