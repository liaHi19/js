//  requestAnimationFrame (rAF) is a web API that tells the browser you want to perform an animation, asking it to schedule a repaint of the window for the next animation frame. It's specifically designed for smooth animations by synchronizing with the browser's natural refresh rate (typically 60fps).

// Key benefits of requestAnimationFrame:

// 1. Performance optimization - the browser can optimize animations by:

//  - Pausing animations in background tabs
//  - Matching the screen's refresh rate to prevent tearing
//  - Batching visual updates together

//  - Battery efficiency - animations are paused when the tab isn't visible
//  - Smoother animations - by synchronizing with the display's refresh rate

const boxInterval = document.getElementById("boxInterval");
const boxAnimationFrame = document.getElementById("boxAnimationFrame");

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = "rotate(" + intervalAngle + "deg)";
  intervalAngle += 2;
}

let previousTime;
function animateWithAnimationFrame(currentTime) {
  console.log(currentTime - previousTime);
  previousTime = currentTime;
  boxAnimationFrame.style.transform = "rotate(" + animationFrameAngle + "deg)";
  animationFrameAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);
}

// Start the animations
setInterval(animateWithInterval, 16); // 60 FPS (approximately)

requestAnimationFrame(animateWithAnimationFrame);
