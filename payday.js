function drawPayday() {
  background(255, 172, 117);

  const busButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "bus",
  };

  const walkButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
    label: "walk",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("its payday. money money monet dollar dola", width / 2, 120);
  text("you got 250 dollars. Hopefully thats enough!", width / 2, 140);
  text("now how will you get home?", width / 2, 160);

  drawButton(busButton);
  drawButton(walkButton);
}

function paydayMousePressed() {
  const busButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
  };

  const walkButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
  };

  if (hoverButton(busButton)) {
    currentScreen = "afternoonbus";
    money = money + 5000000000;
  }

  if (hoverButton(walkButton)) {
    currentScreen = "homeless";
  }
}
