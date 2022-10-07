import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Document, Root} from "../model/documents";

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService implements OnInit{
  readonly GET_ALL_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/find';
  readonly GET_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/findOne';
  readonly INSERT_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/insertOne';
  readonly DELETE_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/deleteOne';
  // readonly  headers:HttpHeaders=new HttpHeaders().append('content-type','application/json') ;
  readonly body:any={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask"};
  readonly header:HttpHeaders=new HttpHeaders({'content-type':'application/json','Authorization':'Basic TWF0OkpnIWdGVjVkLXpLRXdfbg=='});


  ngOnInit(): void {
    // this.headers.append('Authorization','Basic TWF0OkpnIWdGVjVkLXpLRXdfbg==');
  }


  constructor(private httpClient: HttpClient) {
  }

  getAllTasks () :Observable<Root>{
    return  this.httpClient.post<any>(this.GET_ALL_URL,this.body,{headers:this.header}) ;
  }
  getOneTask () :Observable<any>{
    return  this.httpClient.post<any>(this.GET_ONE_URL,this.body,{headers:this.header}) ;
  }
  insertOneTask (task:Array<Document>) :Observable<any>{
    return  this.httpClient.post<Array<Document>>(this.INSERT_ONE_URL,this.body,{headers:this.header}) ;
  }
  deleteOneTask () :Observable<any>{
    return  this.httpClient.post<any>(this.DELETE_ONE_URL,this.body,{headers:this.header}) ;
  }



}

