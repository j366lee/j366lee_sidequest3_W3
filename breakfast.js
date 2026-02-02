function drawBreakfast() {
  background(138, 225, 255);

  const eatButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "eat",
  };

  const starveButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
    label: "starve.",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("You wake up refreshed! but ur hungry.", width / 2, 120);
  text("eating breakfast will take up 5 dollars", width / 2, 140);
  text("or you can starve for free.", width / 2, 160);

  drawButton(eatButton);
  drawButton(starveButton);
}

function breakfastMousePressed() {
  const eatButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "eat",
  };

  const starveButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
    label: "starve.",
  };

  if (hoverButton(starveButton)) {
    starvedCounter = true;
    currentScreen = "morningtransit";
  } else if (hoverButton(eatButton)) {
    currentScreen = "morningtransit";
    money = money - 5;
  }
}
