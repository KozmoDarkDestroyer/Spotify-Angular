import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private artists:any[];
  private search:string;
  flag:string;
  private loading:boolean;
  constructor( private serviceSpotify:SpotifyService ) { 
    this.flag = 'search';
  }

  ngOnInit() {
  }

  public get Artists():any[]{
    return this.artists;
  }

  public get Search():string{
    return this.search;
  }

  public set Search(value:string){
    this.search = value;
    this.searchArtists();
  }

  public searchArtists(){
    this.loading = true;
    this.serviceSpotify.getArtists(this.search)
      .subscribe((res) => {
        this.artists = res;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  }

  public get Loading():boolean{
    return this.loading;
  }
}
