import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";
import {Document, Root} from "../../model/documents";
import {TaskService} from "../../shared/task.service";


@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit, OnChanges {
  addedTasks: Document[] | undefined;


  constructor(private http: HttpTaskService, private taskService: TaskService) {


  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getTaskFromDB();
  }


  ngOnInit(): void {
    this.getTaskFromDB();
  }


  getAddedTasks() {
    this.getTaskFromDB();
  }

  moveToDeleteTask(task: Document) {
    this.http.moveTaskToDeleted(task).subscribe(data => {
      setTimeout(() => {
        this.getTaskFromDB();
      }, 500)
    });


  }
  moveToDoneTask(task: Document) {
    this.http.moveTaskToDone(task).subscribe(data => {
      setTimeout(() => {
        this.getTaskFromDB();
      }, 500)
    });
  }

  getTaskFromDB() {
    this.http.getAllTasks().subscribe((tasks: Root) => {
      this.addedTasks = tasks.documents;
    });
  }
}
