function drawStarved() {
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
  text("the lack of breakfast and lunch made you collapse.", width / 2, 120);
  text("your boss ignores you, and left you to die.", width / 2, 140);
  text("maybe you should eat at least one meal.", width / 2, 160);

  drawButton(resetButton);
}

function starvedMousePressed() {
  const resetButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
  };

  if (hoverButton(resetButton)) {
    currentScreen = "intro";
    money = 280;
    starvedCounter = false;
  }
}
