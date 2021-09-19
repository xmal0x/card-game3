import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Word } from 'src/app/app.model';
import { Utils } from 'src/app/utils';

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"]
})
export class GameComponent implements OnInit {
  public currentWord: Word;
  public gameOptions: Word[] = [];
  public currentLanguage: "en" | "ru" = "ru";

  private words: Word[] = [];

  private optionsQty: number = 6;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.words = this.dataService.getData();

    this.nextWord(this.optionsQty, this.words);
  }

  nextWord(optionsQty: number, words: Word[]): void {
    this.gameOptions = this.fillOptions(optionsQty, words);
    this.currentWord = this.gameOptions[Utils.getRandomNumber(optionsQty)];
  }

  fillOptions(optionsQty: number, words: Word[]): Word[] {
    const options: Word[] = [];
    for (let i = 0; i < optionsQty; i++) {
      const opt = words[Utils.getRandomNumber(words.length)];
      if (!options.find(word => word[this.currentLanguage] === opt[this.currentLanguage])) {
        options.push(opt);
      } else {
        optionsQty++;
      }
    }

    return options;
  }


}
