function drawLunch() {
  background(243, 255, 173);

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
  text("its time for lunch!", width / 2, 120);
  text("eating lunch costs you 15 bucks.", width / 2, 140);
  text("again, starving is completely free!", width / 2, 160);

  drawButton(eatButton);
  drawButton(starveButton);
}

function lunchMousePressed() {
  const eatButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
  };

  const starveButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
  };

  if (hoverButton(eatButton)) {
    currentScreen = "coworkers";
    money = money - 15;
  }

  if (hoverButton(starveButton)) {
    if (starvedCounter === true) {
      currentScreen = "starved";
    } else {
      currentScreen = "coworkers";
    }
  }
}
