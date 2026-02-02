function drawGiftcard() {
  background(138, 255, 183);

  const wahooButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
    label: "WAHOO!",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("wow! that was a blast!", width / 2, 120);
  text("your coworkers liked you so much!", width / 2, 140);
  text("one of them even gave you a 5 dollar tims giftcard!", width / 2, 160);

  drawButton(wahooButton);
}

function giftcardMousePressed() {
  const wahooButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
  };

  if (hoverButton(wahooButton)) {
    currentScreen = "payday";
    money = money + 250;
  }
}
