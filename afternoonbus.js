function drawBus() {
  background(148, 151, 255);

  const resetButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
    label: "Play again?",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("the bus crashed. you got 5 billion settlement.", width / 2, 120);
  text("i mean. you dont need to pay rent anymore now.", width / 2, 140);
  text("you buy a house, and live happily ever after.", width / 2, 160);

  drawButton(resetButton);
}

function busMousePressed() {
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
