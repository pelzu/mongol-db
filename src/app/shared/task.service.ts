import {Injectable, OnInit} from '@angular/core';
import {HttpTaskService} from "./http-task.service";
import {Document, Root} from "../model/documents";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService  {

  allTaskList:Array<Document>=[] ;
  constructor(private http :HttpTaskService) {
  }




}
