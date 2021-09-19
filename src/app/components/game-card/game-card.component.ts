import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Word } from "src/app/app.model";
import { Utils } from "src/app/utils";

@Component({
  selector: "app-game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.scss"]
})
export class GameCardComponent implements OnInit {
  @Input() word: Word;
  @Input() currentLanguage: "en" | "ru";
  @Input() currentWord: Word;

  @Output() onCheckCard: EventEmitter<boolean> = new EventEmitter<boolean>();

  public cardLanguage: "en" | "ru";

  constructor() {}

  ngOnInit() {
    this.cardLanguage = Utils.reverseLanguage(this.currentLanguage);
  }

  onClick(): void {
    this.currentWord[this.currentLanguage] === this.word[this.currentLanguage]
      ? this.onCheckCard.emit(true)
      : this.onCheckCard.emit(false);
  }
}
