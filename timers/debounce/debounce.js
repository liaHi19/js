//  Debouncing is a programming practice that limits how often a function can fire by enforcing a waiting period before it can be called again. It's like adding a "cooling off" period after each function call. If the function is called again during this waiting period, the timer resets, and the waiting period starts over.

// Common use cases include:

// 1. Search input fields - waiting until the user stops typing before making API calls
// 2. Window resize handlers - preventing excessive calculations as the window is being resized
// 3. Save drafts - waiting until the user stops typing before auto-saving

function getApiCall(searchQuery) {
  console.log(`I'm searching ${searchQuery}`);
}

const search = document.querySelector("#search");

// let debounceTimeout;

// search.addEventListener("input", () => {
//   clearTimeout(debounceTimeout);

//   debounceTimeout = setTimeout(() => {
//     getApiCall();
//   }, 1000);
// });

const debounceGetApi = debounce(getApiCall, 400);

search.addEventListener("input", (e) => {
  debounceGetApi(e.target.value);
});

function debounce(cb, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
