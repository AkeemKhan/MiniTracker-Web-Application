import { Component, OnInit } from '@angular/core';
import { PlayerDetails } from '../models/PlayerDetails';
import { Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})

export class DetailsComponent implements OnInit {

  PlayerRequest: PlayerDetails;

  Commands: Command[] = [
    new Command('Black Ops 4', 1),
    new Command('Rainbow Six Siege', 2)
  ];

  SelectedCommand: Command;

  constructor() {
    this.PlayerRequest = new PlayerDetails();
  }

  ngOnInit() {
  }

}

export class Command {
  Display: string;
  Id: number;

  constructor(disp: string, id: number) {
    this.Display = disp;
    this.Id = id;
  }
}
