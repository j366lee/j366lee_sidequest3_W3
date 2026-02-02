function drawCoworkers() {
  background(255, 228, 156);

  const talkButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "talk!",
  };

  const ignoreButton = {
    x: width / 2,
    y: 300,
    w: 250,
    h: 50,
    label: "i like my comfort zone.",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("Your coworkers are talking a lot!", width / 2, 120);
  text(
    "You could join in, but you never talked to them before.",
    width / 2,
    140,
  );
  text(
    "Maybe you could actually get out of your comfort zone.",
    width / 2,
    160,
  );

  drawButton(talkButton);
  drawButton(ignoreButton);
}

function coworkersMousePressed() {
  const talkButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
  };

  const ignoreButton = {
    x: width / 2,
    y: 300,
    w: 250,
    h: 50,
  };

  if (hoverButton(talkButton)) {
    currentScreen = "giftcard";
    money = money + 5;
  }

  if (hoverButton(ignoreButton)) {
    currentScreen = "payday";
    money = money + 250;
  }
}
