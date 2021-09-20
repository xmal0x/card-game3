import {
  transition,
  trigger,
  style,
  query,
  animateChild,
  group,
  animate
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("MainPage <=> GamePage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("600ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("600ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);
