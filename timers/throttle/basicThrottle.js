//  Throttling guarantees that a function runs at a fixed rate - no more than once per specified time period.

//  Think of throttling like a valve that only allows water through at a certain rate. No matter how much pressure you apply, it won't flow faster than the valve allows.

//  Common use cases for throttling include:

// 1. Scroll event handlers - processing scroll events at a manageable rate
// 2. Game input controls - limiting how often a player can fire a weapon
// 3. API rate limiting - ensuring you don't exceed API call limits
// 4. Infinite scrolling - loading new content at a controlled rate

// The key difference from debouncing:

// Debouncing: Waits for a pause in activity before executing
// Throttling: Executes at a regular interval regardless of activity

function getRandomColor() {
  const palette = [
    "#FFADAD",
    "#FFC3A0",
    "#FF677D",
    "#392F5A",
    "#31A2AC",
    "#61C0BF",
    "#6B4226",
    "#D9BF77",
    "#ACD8AA",
    "#FFE156",
    "#6A0572",
    "#AB83A1",
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById("content");

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (scrollDistanceToBottom < 200) {
    console.log("LOADING DATA FROM AN API!!!");
    for (let i = 0; i < 10; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = "Item " + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

let isThrottled = false;
window.addEventListener("scroll", () => {
  if (!isThrottled) {
    loadMoreItems();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 200);
  }
});

// Initial load
loadMoreItems();
