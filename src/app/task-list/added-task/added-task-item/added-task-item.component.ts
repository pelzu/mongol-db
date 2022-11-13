import {Component, Input, OnInit} from '@angular/core';
import {Document} from "../../../model/documents";
import {HttpTaskService} from "../../../shared/http/http-task.service";
import {TaskService} from "../../../shared/task.service";

@Component({
  selector: 'app-added-task-item',
  templateUrl: './added-task-item.component.html',
  styleUrls: ['./added-task-item.component.css']
})
export class AddedTaskItemComponent implements OnInit {
  @Input()  addedTask: Document|undefined;
  tempTaskName : string  ='';
  editOrNot: boolean=true;


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.tempTaskName=this.testTask?.name.toString();
  }

  checkStatus():boolean  {
    return this.addedTask?.taskStatus==1 ;

  }

  moveToDone() {
  this.taskService.doneTask(this.addedTask);

  }

  deleteTask(){
    this.taskService.deleteTask(this.addedTask);


  }
  modifyTask() {

    this.taskService.updateTask(this.addedTask);

  }

  replaceButton() {

    this.editOrNot=!this.editOrNot ;
    this.tempTaskName=<string>this.addedTask?.name;
  }
}
