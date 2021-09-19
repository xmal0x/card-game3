import { Injectable } from "@angular/core";
import { Word } from "../app.model";

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
}
