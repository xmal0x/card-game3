import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Word } from 'src/app/app.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() word: Word;
  @Input() currentLanguage: "en" | "ru";

  @Output() onCheckCard: EventEmitter<boolean> =  new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
