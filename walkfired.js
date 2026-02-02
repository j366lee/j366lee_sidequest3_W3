function drawWalkFired() {
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
  text("you were late to work and your boss was very unhappy.", width / 2, 120);
  text("he told you he found someone else to replace you.", width / 2, 140);
  text("you got fired. maybe you should have taken the bus.", width / 2, 160);

  drawButton(resetButton);
}

function walkFiredMousePressed() {
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
