import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpTaskService} from "../../shared/http/http-task.service";
import {Document, Root} from "../../model/documents";
import * as constants from "constants";
import {TaskService} from "../../shared/task.service";

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


  response:string='' ;


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  addOneTask() {
    this.taskService.addTask(this.task);

  }

}
