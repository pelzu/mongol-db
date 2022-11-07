import {Component, Input,OnInit} from '@angular/core';
import {Document} from "../../model/documents";
import {TaskService} from "../../shared/task.service";
import {HttpTaskService} from "../../shared/http/http-task.service";


@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit {

  @Input() addedTasks: Array<Document> = [];


  constructor(private http:HttpTaskService) {
  }
  ngOnInit(): void {



  }


}
