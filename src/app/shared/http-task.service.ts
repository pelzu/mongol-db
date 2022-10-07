import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
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
  bodyInsert:{ database: string; document: { name: string|undefined; taskStatus: string|undefined }; collection: string; dataSource: string }={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask","document":{"name":"Nauczyć sie wszystkiego","taskStatus":"1"}};

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
  insertOneTask(task: Document | undefined) :Observable<any>{
    this.bodyInsert.document.name=task?.name;
    this.bodyInsert.document.taskStatus=task?.taskStatus.toString();
    return  this.httpClient.post(this.INSERT_ONE_URL,this.bodyInsert,{headers:this.header}) ;
  }
  deleteOneTask () :Observable<any>{
    return  this.httpClient.post<any>(this.DELETE_ONE_URL,this.body,{headers:this.header}) ;
  }



}

