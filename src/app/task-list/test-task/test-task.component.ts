import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskService} from "../../shared/task.service";

@Component({
  selector: 'app-test-task',
  templateUrl: './test-task.component.html',
  styleUrls: ['./test-task.component.css']
})
export class TestTaskComponent implements OnInit{



  constructor(protected taskService: TaskService) {
  }

  ngOnInit(): void {

  }


}
