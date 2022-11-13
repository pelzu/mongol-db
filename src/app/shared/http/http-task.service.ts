import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Document, Root} from "../../model/documents";

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService implements OnInit{
  readonly GET_ALL_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/find';
  readonly GET_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/findOne';
  readonly INSERT_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/insertOne';
  readonly DELETE_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/deleteOne';
  readonly UPDATE_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/updateOne';

  // readonly  headers:HttpHeaders=new HttpHeaders().append('content-type','application/json') ;
  readonly body:any={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask"};
  readonly header:HttpHeaders=new HttpHeaders({'content-type':'application/json','Authorization':'Basic TWF0OkpnIWdGVjVkLXpLRXdfbg=='});
  bodyInsert:{ database: string; document: { name: string|undefined; taskStatus: string|undefined }; collection: string; dataSource: string }={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask","document":{"name":"Nauczyć sie wszystkiego","taskStatus":"1"}};
  bodyDelete:{ database: string; filter: { _id:{$oid:string|undefined}}; collection: string; dataSource: string }={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask","filter":{"_id":{"$oid":""}}};
  bodyStatusUpdate:{ database: string; filter: { _id:{$oid:string|undefined}}; update: {$set:{taskStatus:string|undefined} }; collection: string; dataSource: string }={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask","filter":{"_id":{"$oid":""}},"update":{"$set":{"taskStatus":""}}};
  bodyNameUpdate:{ database: string; filter: { _id:{$oid:string|undefined}}; update: {$set:{name:string|undefined} }; collection: string; dataSource: string }={"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask","filter":{"_id":{"$oid":""}},"update":{"$set":{"name":""}}};

  readonly addedTaskStatus:number=1 ;
  readonly doneTaskStatus:number=2 ;
  readonly deletedTaskStatus:number=3;


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
  deleteTask (task: Document | undefined) :Observable<any>{
    this.bodyDelete.filter._id.$oid=task?._id.toString();
    return  this.httpClient.post(this.DELETE_ONE_URL,this.bodyDelete,{headers:this.header}) ;
  }
  moveTaskToDeleted (task: Document | undefined) :Observable<any>{
    this.bodyStatusUpdate.filter._id.$oid=task?._id.toString();
    this.bodyStatusUpdate.update.$set.taskStatus=this.deletedTaskStatus.toString();
    return  this.httpClient.post(this.UPDATE_ONE_URL,this.bodyStatusUpdate,{headers:this.header}) ;
  }
  moveTaskToDone (task: Document | undefined) :Observable<any>{
    this.bodyStatusUpdate.filter._id.$oid=task?._id.toString();
    this.bodyStatusUpdate.update.$set.taskStatus=this.doneTaskStatus.toString();
    return  this.httpClient.post(this.UPDATE_ONE_URL,this.bodyStatusUpdate,{headers:this.header}) ;
  }
  moveTaskToAdded (task: Document | undefined) :Observable<any>{
    this.bodyStatusUpdate.filter._id.$oid=task?._id.toString();
    this.bodyStatusUpdate.update.$set.taskStatus=this.addedTaskStatus.toString();
    return  this.httpClient.post(this.UPDATE_ONE_URL,this.bodyStatusUpdate,{headers:this.header}) ;
  }
  updateTask (task: Document | undefined) :Observable<any>{
    this.bodyNameUpdate.filter._id.$oid=task?._id.toString();
    this.bodyNameUpdate.update.$set.name=task?.name?.toString();
    return  this.httpClient.post(this.UPDATE_ONE_URL,this.bodyNameUpdate,{headers:this.header}) ;
  }




}

