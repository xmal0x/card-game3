import {
  transition,
  trigger,
  style,
  query,
  animateChild,
  group,
  animate,
  AnimationStyleMetadata,
  AnimationQueryMetadata,
  AnimationGroupMetadata
} from "@angular/animations";

function getAnimationSetting(
  direction: "fromRight" | "fromLeft"
): (
  | AnimationStyleMetadata
  | AnimationQueryMetadata
  | AnimationGroupMetadata
)[] {
  return [
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
    query(":enter", [
      style({ left: direction === "fromRight" ? "100%" : "-100%" })
    ]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate(
          "600ms ease-out",
          style({ left: direction === "fromRight" ? "-100%" : "100%" })
        )
      ]),
      query(":enter", [animate("600ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ];
}

export const slideInAnimation = trigger("routeAnimations", [
  transition("MainPage => GamePage", getAnimationSetting("fromRight")),
  transition("GamePage => MainPage", getAnimationSetting("fromLeft")),

  transition("GamePage => AboutPage", getAnimationSetting("fromRight")),
  transition("AboutPage => GamePage", getAnimationSetting("fromLeft")),

  transition("MainPage => AboutPage", getAnimationSetting("fromRight")),
  transition("AboutPage => MainPage", getAnimationSetting("fromLeft"))
]);

export const insertAnimation = trigger("insertAnimation", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("100ms", style({ opacity: 1 }))
  ]),
  transition(":leave", [animate("100ms", style({ opacity: 0 }))])
]);
