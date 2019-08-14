import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private artistId:string;
  private artist:any;
  private loading:boolean;
  private topTracks:any[];
  constructor(private activatedRoute:ActivatedRoute,
    private serviceSpoty:SpotifyService,
    private router:Router) { 
      this.loading = true;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(( param )=>{
        if (param['id'] == undefined) {
          return;
        }
        this.artistId = param['id'];
        this.loading = true;
        this.getTopTracks(this.artistId);
        this.getArtist(this.artistId);
    })
  }

  getArtist(id:string){
    this.serviceSpoty.getArtist(id)
          .subscribe((data) =>{
            this.artist = data;
            setTimeout(() => {
              this.loading = false;
            }, 500);
          })
  }

  getTopTracks(id:string){
    this.serviceSpoty.getTopTracks(id)
      .subscribe((data) =>{
        this.topTracks = data;
        console.log(this.topTracks);
      })
  }

  public get TopTracks(){
    return this.topTracks;
  }

  public get Artist():any{
    return this.artist;
  }

  public return(){
    this.router.navigate(['/home']);
  }

  public get Loading():boolean{
    return this.loading;
  }

}
