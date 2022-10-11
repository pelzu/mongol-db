import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";
import {Document, Root} from "../../model/documents";
import * as constants from "constants";

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit{
  task:Document=new class implements Document {
    // @ts-ignore
    _id: string;
    name: string= 'Dzisiaj bedziemy dodawac i odejmowac' ;
    taskStatus: number=1;
  };
  @Output() refreshTaskList=new EventEmitter() ;

  response:string='' ;


  constructor(private http:HttpTaskService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  addOneTask() {
    this.http.insertOneTask(this.task).subscribe();
    this.refreshTaskList.emit();
  }

}
