import {Component, Input, OnInit} from '@angular/core';
import {Document, Root} from "../../model/documents";

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.css']
})
export class TestTaskComponent implements OnInit {
  @Input()testTaskList:Array<Document>=[] ;
  constructor() { }

  ngOnInit(): void {
    this.testTaskList.push(new class implements Document {
      _id: string='1';
      name: string='Zmywać';
      taskStatus: number=5;
    });

  }

}
