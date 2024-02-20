import { userLocationInput } from "./index.js";

const searchForm = document.querySelector("#city-search");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`Submited: ${e.target.search.value}`);
    userLocationInput(e.target.search.value);
    e.target.search.value = "";
});
