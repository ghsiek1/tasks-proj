import { Injectable } from '@angular/core';
import {task} from './task';
import {TASKS} from './mock-task'
import {Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = 'http://localhost:5000/tasks'


  constructor(private http:HttpClient) { }

  getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.apiUrl);
  }

  deleteTask(task:task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<task>(url);
  }

  updateTask(task:task): Observable<task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<task>(url,task, httpOptions);
  }
}
