import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import {HttpTaskService} from "../../shared/http-task.service";
import {Document, Root} from "../../model/documents";

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css']
})
export class InputTaskComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterViewChecked,AfterViewInit,AfterContentChecked,OnDestroy {
  task:Document=new class implements Document {
    // @ts-ignore
    _id: string;
    name: string= 'Dzisiaj bedziemy dodawac i odejmowac' ;
    taskStatus: number=1;
  };
  response:string='' ;


  constructor(private http:HttpTaskService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  addOneTask() {
    this.http.insertOneTask(this.task).subscribe();

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


}
