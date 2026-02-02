function drawEndscreen() {
  background(179, 135, 255);

  const resetButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 100,
    label: "Play again?",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);

  if (money >= 500) {
    text("you made enough money to pay rent!", width / 2, 120);
    text("it was close, but you're good for this month.", width / 2, 140);
    text("you're glad rent isnt 2000 dollars here.", width / 2, 160);
  } else if (money < 500 && goodKarma === false) {
    text("you couldn't make enough for rent...", width / 2, 120);
    text("your landlord kicks you out.", width / 2, 140);
    text("maybe you should have skipped lunch.", width / 2, 160);
  } else if (money < 500 && goodKarma === true) {
    text("you couldn't make enough for rent...", width / 2, 120);
    text("but the homeless guy was a secret millionare!", width / 2, 140);
    text("he gives you a house! wow!", width / 2, 160);
  }

  drawButton(resetButton);
}

function endscreenMousePressed() {
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
