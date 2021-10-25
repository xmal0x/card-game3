export class Utils {
  static getRandomNumber(maxNum: number): number {
    return Math.floor(Math.random() * maxNum);
  }

  static reverseLanguage(currentLanguage: "en" | "ru"): "en" | "ru" {
    return currentLanguage === "en" ? "ru" : "en";
  }
}
