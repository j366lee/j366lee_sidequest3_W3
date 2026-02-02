function drawIntro() {
  //weezer blue
  background(0, 172, 230);

  const startButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
    label: "Start",
  };

  textSize(20);
  text("MAKE RENT SIMULATOR", width / 2, 100);
  textSize(15);
  text("you have 270 dollars to your name", width / 2, 140);
  text("and 500 dollar rent is due today", width / 2, 160);
  text("SAVE MONEY. AND GO TO WORK.", width / 2, 180);

  drawButton(startButton);
}

function introMousePressed() {
  const startButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
  };

  if (hoverButton(startButton)) {
    currentScreen = "breakfast";
  }
}
