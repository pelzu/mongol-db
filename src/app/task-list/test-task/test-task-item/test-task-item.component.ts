import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Document} from "../../../model/documents";
import {TaskService} from "../../../shared/task.service";

@Component({
  selector: 'app-test-task-item',
  templateUrl: './test-task-item.component.html',
  styleUrls: ['./test-task-item.component.css']
})
export class TestTaskItemComponent implements OnInit {
  @Input() testTask: Document | undefined;
  tempTaskName : string  ='';
  editOrNot: boolean=true;

  constructor(private taskService: TaskService) {
  }



  ngOnInit(): void {

    // @ts-ignore
    this.tempTaskName=this.testTask?.name.toString();
  }


  restoreTask() {
    this.taskService.restoreTask(this.testTask);
  }

  forceDeleteTask() {
    this.taskService.deleteTask(this.testTask);
  }

  modifyTask() {

    this.taskService.updateTask(this.testTask);

  }

  checkStatus(): boolean {
    return this.testTask?.taskStatus == 4;
  }

  replaceButton() {

    this.editOrNot=!this.editOrNot ;
    this.tempTaskName=<string>this.testTask?.name;
  }
}
