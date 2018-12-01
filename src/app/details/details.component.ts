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
    new Command('Black Ops 4', 'bo4', ['Blackout', 'Multiplayer']),
    new Command('Rainbow Six Siege', 'r6s', ['Ranked'])
  ];

  SelectedCommand: Command;
  SelectedMode: string;
  PossibleModes: string[];

  constructor() {
    this.PlayerRequest = new PlayerDetails();
  }

  ngOnInit() {
  }

  onGameChange(command: Command) {
    this.PossibleModes = command.Modes;
    this.SelectedMode = this.PossibleModes[0];
    console.log('Selected Game - ' + this.SelectedCommand.Display);
  }

  onModeChange(mode: string){
    console.log('Selected Game - ' + this.SelectedCommand.Display + ' selected mode: ' + this.SelectedMode);
  }

}

export class Command {
  Display: string;
  CommandId: string;
  Modes: string[]
  constructor(disp: string, id: string, modes: string[]) {
    this.Display = disp;
    this.CommandId = id;
    this.Modes = modes;
  }
}
