import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';


  constructor(public http: Http) {
   }

  query(URL: string, params?: Array<string>): Observable<any[]{
    let queryURL = `${SpotifyService.BASE_URL}`;
    console.log(queryURL);
    
    if(params){
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    //is outdated api key
    const apiKey = 'BQBLBkwYSZAaYrvV53xRB0ghCijiIwrm9y5UrVaSk0v4Ydna5j-8E8-KOaAkZyf9FZm-ukD8_EeT-rAk3nVZfi_A_yOms6GInmQ9M8xLRDfjr7LQTeqzQn8kQUj4NIGYFHJ2EI78geVaFcoHUw';
    const headers = new  Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });
    return this.http.request(queryURL, options).map((res: any)=> res.json());

    */
    return this.http.request(queryURL).map((res: any) => res.json());
  }

  

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`)
  }

  searchTrack(query: string): Observable<any[]>{
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]>{
    return this.query(`/tracks/${id}`);
  }
}

