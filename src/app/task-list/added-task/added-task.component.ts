import { Component, OnInit } from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";

@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit {

  constructor(private http:HttpTaskService) { }

  ngOnInit(): void {
  }


  getAlItems() {
    this.http.get().subscribe(items=>{
      console.log(items.name);
    }) ;
  }
}
