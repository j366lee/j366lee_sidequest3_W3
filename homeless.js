function drawHomeless() {
  background(219, 128, 255);

  const ignoreButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "ignore.",
  };

  const giveButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
    label: "give 5 bucks",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("on your way home, you meet a homeless guy.", width / 2, 120);
  text(
    "you don't have much money, but he probably needs it more.",
    width / 2,
    140,
  );
  text("will you be generous?", width / 2, 160);

  drawButton(ignoreButton);
  drawButton(giveButton);
}

function homelessMousePressed() {
  const ignoreButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
  };

  const giveButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
  };

  if (hoverButton(ignoreButton)) {
    currentScreen = "endscreen";
  }

  if (hoverButton(giveButton)) {
    currentScreen = "endscreen";
    money = money - 5;
    goodKarma = true;
  }
}
