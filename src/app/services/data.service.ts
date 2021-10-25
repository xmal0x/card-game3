import { Injectable } from "@angular/core";
import { Word } from "../app.model";
import { Utils } from '../utils';

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getData(): Word[] {
    return [
      { en: "Hello", ru: "Привет" },
      { en: "Scream", ru: "Крик" },
      { en: "Table", ru: "Стол" },
      { en: "Weather", ru: "Погода" },
      { en: "Pencil", ru: "Ручка" },
      { en: "Cinema", ru: "Кино" },
      { en: "Grid", ru: "Сетка" },
      { en: "Paper", ru: "Бумага" },
      { en: "Dear", ru: "Дорогой" },
      { en: "Brother", ru: "Брат" },
      { en: "Mother", ru: "Мама" },
      { en: "Land", ru: "Земля" },
      { en: "Winner", ru: "Победитель" }
    ];
  }

  getNotValidMessage(): string {
    const messages = [
      "You can better:)",
      "Let's try again",
      "Don't worry",
      "Maybe another variant?",
      "Not right"
    ];
    return messages[Utils.getRandomNumber(messages.length)];
  }
}
