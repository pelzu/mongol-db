import {Component, Input,OnInit} from '@angular/core';
import {Document} from "../../model/documents";


@Component({
  selector: 'app-added-task',
  templateUrl: './added-task.component.html',
  styleUrls: ['./added-task.component.css']
})
export class AddedTaskComponent implements OnInit {

  @Input() addedTasks: Array<Document> = [];


  constructor() {


  }

  ngOnInit(): void {
  }


}
