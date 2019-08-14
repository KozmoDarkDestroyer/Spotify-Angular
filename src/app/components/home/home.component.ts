import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private newRelases:any[];
  flag:string;
  private loading:boolean;

  constructor(private serviceSpotify:SpotifyService) { 
    this.flag = 'home';
    this.loading = true;
    this.serviceSpotify.getNewRelases()
      .subscribe((res) =>{
        this.newRelases = res;
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
  }

  ngOnInit() {
  }

  public get NewRelases():any[]{
    return this.newRelases;
  }

  public get Loading():boolean{
    return this.loading;
  }
}
