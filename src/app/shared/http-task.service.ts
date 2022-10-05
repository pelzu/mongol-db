import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpTaskService {
  getAllTaskEndpoint :string ='https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/find';
  getOneTaskEndpoint :string ='https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/findOne';
  insertOneTaskEndpoint :string ='https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/insertOne';
  deleteOneTaskEndpoint :string ='https://data.mongodb-api.com/app/data-suaer/endpoint/data/v1/action/deleteOne';



  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Task>>  {
    this.httpClient.
  }
}
