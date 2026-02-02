function drawWorkFired() {
  background(179, 182, 201);

  const resetButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
    label: "try again?",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("you forgot your boss is kinda a butt.", width / 2, 120);
  text("he said your efforts are making his look bad", width / 2, 140);
  text("you got fired. maybe you should just stay low.", width / 2, 160);

  drawButton(resetButton);
}

function workFiredMousePressed() {
  const resetButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
  };

  if (hoverButton(resetButton)) {
    currentScreen = "intro";
    money = 270;
    starvedCounter = false;
  }
}
