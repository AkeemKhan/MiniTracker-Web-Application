import { Component, OnInit } from '@angular/core';
import { PlayerDetails } from '../models/PlayerDetails';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  PlayerRequest: PlayerDetails;

  constructor() {
    this.PlayerRequest = new PlayerDetails();
  }

  ngOnInit() {
  }

}
