function drawMorningTransit() {
  background(166, 254, 255);

  const walkButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "walk",
  };

  const busButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
    label: "bus",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text(
    "it's time to get to work, you better get there in time!",
    width / 2,
    120,
  );
  text("walking is free, but you will probably be late.", width / 2, 140);
  text("taking the bus costs 5 dollars, but youll be on time!", width / 2, 160);

  drawButton(walkButton);
  drawButton(busButton);
}

function morningTransitMousePressed() {
  const walkButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
  };

  const busButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
  };

  if (hoverButton(walkButton)) {
    currentScreen = "walkfired";
  }

  if (hoverButton(busButton)) {
    currentScreen = "work";
    money = money - 5;
  }
}
