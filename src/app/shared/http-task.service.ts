import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService implements OnInit{
  readonly GET_ALL_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/find';
  readonly GET_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/findOne';
  readonly INSERT_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/insertOne';
  readonly DELETE_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/deleteOne';
  headers:HttpHeaders=new HttpHeaders().append('content-type','application/json') ;
  body:any={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask"};
  header:HttpHeaders=new HttpHeaders({'content-type':'application/json','Authorization':'Basic TWF0OkpnIWdGVjVkLXpLRXdfbg=='});


  ngOnInit(): void {
    // this.headers.append('Authorization','Basic TWF0OkpnIWdGVjVkLXpLRXdfbg==');
  }


  constructor(private httpClient: HttpClient) {
  }

  getAllTasks () :Observable<any>{
    return  this.httpClient.post<any>(this.GET_ALL_URL,this.body,{headers:this.headers}) ;

  }



}

