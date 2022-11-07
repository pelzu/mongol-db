import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/documents";
import {HttpTaskService} from "../../../shared/http/http-task.service";

@Component({
  selector: 'app-added-task-item',
  templateUrl: './added-task-item.component.html',
  styleUrls: ['./added-task-item.component.css']
})
export class AddedTaskItemComponent implements OnInit {
  @Input()  addedTask: Document|undefined;


  constructor(private http:HttpTaskService) { }

  ngOnInit(): void {
  }

  checkStatus():boolean  {
    return this.addedTask?.taskStatus==1 ;

  }

  moveToDone() {
    this.http.moveTaskToDone(this.addedTask).subscribe();

  }

  deleteTask(){
    this.http.moveTaskToDeleted(this.addedTask).subscribe();

  }
}
