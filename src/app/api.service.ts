import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:any="https://hacker-news.firebaseio.com/v0";

  constructor() { }
}
