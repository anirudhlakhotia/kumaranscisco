import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Event } from './event';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): any {
    // return EVENTS;
    return this.http.get("assets/mydata.json");
  }
}
