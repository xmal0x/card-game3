import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";
import { AboutComponent } from "./components/about/about.component";
import { GameComponent } from "./components/game/game.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { Routes, RouterModule } from "@angular/router";
import { GameCardComponent } from "./components/game-card/game-card.component";

const appRoutes: Routes = [
  { path: "", component: MainComponent, data: { animation: "MainPage" } },
  { path: "game", component: GameComponent, data: { animation: "GamePage" } },
  { path: "about", component: AboutComponent, data: { animation: "AboutPage" } }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    GameComponent,
    FooterComponent,
    HeaderComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
