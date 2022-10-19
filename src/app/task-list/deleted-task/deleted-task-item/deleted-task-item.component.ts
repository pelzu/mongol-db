import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Document} from "../../../model/documents";
import {HttpTaskService} from "../../../shared/http/http-task.service";


@Component({
  selector: 'app-deleted-task-item',
  templateUrl: './deleted-task-item.component.html',
  styleUrls: ['./deleted-task-item.component.css']
})
export class DeletedTaskItemComponent implements OnInit {
  @Input()deletedTask: Document|undefined;
  @Output() trigDeletedTaskItem=new EventEmitter() ;
  @ViewChild('inputElement') inputElementRef:ElementRef|undefined;
  @ViewChild('button') button:ElementRef|undefined;

  constructor(private http:HttpTaskService) { }

  ngOnInit(): void {
  }

  checkStatus():boolean {
return this.deletedTask?.taskStatus==3 ;

  }

  forceDeleteTask() {
    this.http.deleteTask(this.deletedTask).subscribe();
    this.trigDeletedTaskItem.emit();
  }

  restoreTask() {
    console.log(this.inputElementRef?.nativeElement.value);
  }


}
