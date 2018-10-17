import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../spotify.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track:Object;
  constructor(private route: ActivatedRoute, private spotify: SpotifyService) { 
    route.params.subscribe(params =>{
      this.id = params['id'];
    });
  }

  ngOnInit(): void{
    this.spotify.getTrack(this.id).subscribe((res:any) => this.renderTrack(res));

  }

  renderTrack(res:any):void{
    this.track = res;
  }
}
