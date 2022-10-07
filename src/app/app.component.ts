import {Component, OnInit} from '@angular/core';
import {HttpTaskService} from "./shared/http-task.service";
import {Document, Root} from "./model/documents";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  root: Root | undefined ;
  taskers: Document[] | undefined=[];
  constructor(private http:HttpTaskService) {

  }
  ngOnInit(): void {
    this.http.getAllTasks().subscribe(items=>{
      this.root=items;

      this.taskers=this.root?.documents;
    })} ;



}
