import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCjUV48UxGXy1IDmLfrdqh4RdC1p8R1YMnYHMH-4MljorMngCMaNoQjBJbfoZMRVcJzs70Fh5V99NEx7_M'
    });
    return this.http.get(url, { headers });
  }

  getNewRelases():Observable<any>{
    return this.getQuery('browse/new-releases')
      .pipe(map( (data:any) =>{
        return data.albums.items;
      }));
  }

  getArtists(artist:string):Observable<any>{
    return this.getQuery(`search?q=${ artist }&type=artist&limit=50&offset=5`)
    .pipe(map((data:any) =>{
      return data.artists.items;
    }));
  }

  getArtist(id:string):Observable<any>{
    return this.getQuery(`artists/${ id }`)
      .pipe(map((data:any) =>{
        return data;
      }));
  }

  getTopTracks(id:string):Observable<any>{
    return this.getQuery(`artists/${ id }/top-tracks?country=US`)
      .pipe(map((data:any) =>{
        return data['tracks'];
      }));
  }

}
