// GBDA 302 WEEK 3 SIDE QUEST
// Jisoo Lee
// Make rent simulator

// Starting money
let money = 270;
let currentScreen = "intro";
let starvedCounter = false;
let goodKarma = false;

// Function that draws a button and changes color when being hovered over
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  const hover = hoverButton({ x, y, w, h });

  if (hover) {
    fill(220);
  } else {
    fill(255);
  }

  rect(x, y, w, h, 10);

  textAlign(CENTER, CENTER);
  fill(0);
  textSize(20);
  text(label, x, y);
}

function buttonPressed() {
  if (hoverButton && mouseIsPressed) {
    return true;
  }
}

//Function that detects if a button is being hovered over
function hoverButton({ x, y, w, h }) {
  if (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  ) {
    return true;
  }
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

// Different screen states
function draw() {
  if (currentScreen === "intro") drawIntro();
  else if (currentScreen === "breakfast") drawBreakfast();
  else if (currentScreen === "morningtransit") drawMorningTransit();
  else if (currentScreen === "walkfired") drawWalkFired();
  else if (currentScreen === "work") drawWork();
  else if (currentScreen === "workfired") drawWorkFired();
  else if (currentScreen === "lunch") drawLunch();
  else if (currentScreen === "starved") drawStarved();
  else if (currentScreen === "coworkers") drawCoworkers();
  else if (currentScreen === "giftcard") drawGiftcard();
  else if (currentScreen === "payday") drawPayday();
  else if (currentScreen === "afternoonbus") drawBus();
  else if (currentScreen === "homeless") drawHomeless();
  else if (currentScreen === "endscreen") drawEndscreen();
}

function mousePressed() {
  if (currentScreen === "intro") introMousePressed();
  else if (currentScreen === "breakfast") breakfastMousePressed();
  else if (currentScreen === "morningtransit") morningTransitMousePressed();
  else if (currentScreen === "walkfired") walkFiredMousePressed?.();
  else if (currentScreen === "work") workMousePressed();
  else if (currentScreen === "workfired") workFiredMousePressed?.();
  else if (currentScreen === "lunch") lunchMousePressed();
  else if (currentScreen === "starved") starvedMousePressed?.();
  else if (currentScreen === "coworkers") coworkersMousePressed();
  else if (currentScreen === "giftcard") giftcardMousePressed?.();
  else if (currentScreen === "payday") paydayMousePressed();
  else if (currentScreen === "afternoonbus") busMousePressed?.();
  else if (currentScreen === "homeless") homelessMousePressed?.();
  else if (currentScreen === "endscreen") endscreenMousePressed();
}
