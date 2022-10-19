import {Component, OnInit} from '@angular/core';
import {HttpTaskService} from "./shared/http/http-task.service";
import {Document, Root} from "./model/documents";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  root: Root | undefined ;
  taskers: Document[] | undefined=[];
  value: number=2;
  constructor(private http:HttpTaskService) {

  }
  ngOnInit(): void {
    this.http.getAllTasks().subscribe(items=>{
      this.root=items;

      this.taskers=this.root?.documents;
    })} ;




}


