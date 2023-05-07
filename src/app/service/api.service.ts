import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIJikanime, AnimeJi } from '../interfaces/api-anime';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://api.jikan.moe/v4/anime?q=';


  private Anime_response$ = new Subject<any>();

  constructor(private http: HttpClient) {}


 getAnimes(searchTerm: string): Observable<APIJikanime>{
  return this.http.get<APIJikanime>(`${this.urlApi}${searchTerm}`);
 }

addResultAnime(anime: AnimeJi[]){
  this.Anime_response$.next(anime)
}

getResultAnime(): Observable<AnimeJi[]>{
  return this.Anime_response$.asObservable();
}

}
