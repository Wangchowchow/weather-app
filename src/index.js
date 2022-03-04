import request from "./request";
import resolve from "./resolve";

const searchForm = document.querySelector("form");
const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchInput.value = "";
});

searchButton.addEventListener("click", async () => {
    if (searchInput.value === "") {
        alert("Please Input City/Region");
        return;
    };
    const data = await request.requestData(searchInput.value);
    resolve.resolveData(data);
});