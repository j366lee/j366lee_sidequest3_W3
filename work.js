function drawWork() {
  background(184, 255, 216);

  const hardButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
    label: "work hard",
  };

  const normalButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
    label: "work normally",
  };

  textSize(15);
  text("money: $" + money, width / 2, 50);
  text("you arrived at work on time!", width / 2, 120);
  text("what a great day to work!", width / 2, 140);
  text("do you wanna work hard, or work normally?", width / 2, 160);

  drawButton(hardButton);
  drawButton(normalButton);
}

function workMousePressed() {
  const hardButton = {
    x: width / 2,
    y: 240,
    w: 200,
    h: 50,
  };

  const normalButton = {
    x: width / 2,
    y: 300,
    w: 200,
    h: 50,
  };

  if (hoverButton(hardButton)) {
    currentScreen = "workfired";
  }

  if (hoverButton(normalButton)) {
    currentScreen = "lunch";
  }
}
