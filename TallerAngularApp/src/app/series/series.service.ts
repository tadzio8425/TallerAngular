import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './Serie';
import {environment} from '../../environments/environments'

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiURL);
  }

}
