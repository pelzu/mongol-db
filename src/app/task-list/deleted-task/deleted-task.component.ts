import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../shared/task.service";
import {Document, Root} from "../../model/documents";
import {HttpTaskService} from "../../shared/http-task.service";

@Component({
  selector: 'app-deleted-task',
  templateUrl: './deleted-task.component.html',
  styleUrls: ['./deleted-task.component.css']
})
export class DeletedTaskComponent implements OnInit {
  deletedTask:Array<Document>=[] ;

  constructor(private http:HttpTaskService) {
  }

  ngOnInit(): void {
    this.getDeletedTask();
  }
  getDeletedTask () {
    this.http.getAllTasks().subscribe((tasks: Root) => {
      this.deletedTask = tasks.documents;
    });
  }


  forceDeleteTask(task:Document) {
    this.http.deleteTask(task).subscribe(data => {
      setTimeout(() => {
        this.getDeletedTask();
      }, 500)
    });
  }
  restoreTask(task:Document) {
    this.http.moveTaskToAdded(task).subscribe(data => {
      setTimeout(() => {
        this.getDeletedTask();
      }, 500)
    });
  }


}
