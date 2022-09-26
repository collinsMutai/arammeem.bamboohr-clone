import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ijobs } from '../interface/jobs';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  baseUrl: string = 'http://localhost:3000'


  constructor(private http: HttpClient) { }

  getJobs(): Observable <Ijobs[]> {
    return this.http.get<Ijobs[]>(`${this.baseUrl}/data`)
  }
  getJob(id:number): Observable <Ijobs[]> {
    return this.http.get<Ijobs[]>(`${this.baseUrl}/data/${id}`)
  }
  
}
