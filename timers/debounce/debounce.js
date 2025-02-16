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
