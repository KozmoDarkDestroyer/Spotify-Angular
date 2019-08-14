import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.css']
})
export class CardSpotifyComponent implements OnInit {

  @Input() item:any;
  @Input() flag:any;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  seeArtist( item:any ){
    let artistId;

    if (item.type == 'artist') {
      artistId = item.id;
    }
    else if(item.type == 'album'){
      artistId = item.artists[0].id;
    }
    this.router.navigate([`/artist/${ artistId }`]);
  }

}
