import { Component, OnInit } from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";
import {Document, Root} from "../../model/documents";

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit {
  task:Document=new class implements Document {
    // @ts-ignore
    _id: string;
    name: string= 'Dzisiaj bedziemy dodawac i odejmowac' ;
    taskStatus: number=1;
  };
  response:string='' ;


  constructor(private http:HttpTaskService) { }

  ngOnInit(): void {
  }

  addOneTask() {
    this.http.insertOneTask(this.task).subscribe();

  }


}
