import { Component, OnInit } from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";
import {Document, Root} from "../../model/documents";


@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit {
  tasks: Root | undefined ;
  mati:Array<String>=['Loli','Hentajce'];
  taskers: Document[] | undefined ;
  constructor(private http:HttpTaskService) {


  }

  ngOnInit(): void {
  }


  getAlItems() {
    this.http.getAllTasks().subscribe(items=>{
      this.tasks=items;
      this.taskers=this.tasks?.documents;
      this.taskers?.forEach(task=>{console.log(task.name)})
      console.log(this.mati);
    }) ;
  }
}
