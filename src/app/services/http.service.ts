import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { illustration } from '../model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getAllIllustrations(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/data` );
  }

  getIllustrations(id: string): Observable<illustration> {
    return this.http.get<illustration>(`http://localhost:3000/data/${id}` );
  }
}
