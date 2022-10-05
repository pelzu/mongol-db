import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {SimpleTask} from "../model/simple-task";

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService implements OnInit{


  readonly GET_ALL_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/find';
  readonly GET_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/findOne';
  readonly INSERT_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/insertOne';
  readonly DELETE_ONE_URL: string = 'https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/deleteOne';
  headers:HttpHeaders=new HttpHeaders().append('content-type','application/json') ;


  ngOnInit(): void {
    this.headers.append('Authorization','Basic TWF0OkpnIWdGVjVkLXpLRXdfbg==');
  }


  constructor(private httpClient: HttpClient) {

  }

  get () :Observable<SimpleTask>{
    return  this.httpClient.post<SimpleTask>(this.GET_ALL_URL,{"dataSource":"Cluster0", "database":"Simple", "collection":"SimpleTask"},{headers:this.headers}) ;

  }


}

