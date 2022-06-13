window.onload = function () {
  const searchBtn = document.querySelector("#search-btn");
  const themeBtn = document.querySelector("#toggle-btn");

  setUpDarkMode();
  renderData();

  searchBtn.addEventListener("click", function searchUser() {
    console.log("click");
  });

  function setUpDarkMode() {
    function toggleThemeBtn() {
      document.getElementById("toggle-light").classList.toggle("hidden");
      document.getElementById("toggle-dark").classList.toggle("hidden");
    }

    function toggleDarkMode(state) {
      document.documentElement.classList.toggle("dark", state);
    }

    const useDark = window.matchMedia("(prefers-color-scheme: dark)");
    useDark.addEventListener("change", function listenToThemeChange(e) {
      toggleDarkMode(e.matches);
      toggleThemeBtn();
    });

    // Initialize dark mode if matches with OS settings
    toggleDarkMode(useDark.matches);

    // Adds event listener to toggle dark mode with btn
    themeBtn.addEventListener("click", function toggleTheme(e) {
      document.documentElement.classList.toggle("dark");
      toggleThemeBtn();
    });
  }

  function renderData() {
    const img = document.querySelector(".user__img");
    const name = document.querySelector(".user__name");
    const joined = document.querySelector("#joined-info");
    const userName = document.querySelector(".user__username");
    const description = document.querySelector(".description");
    const repos = document.querySelector("#repos-info");
    const followers = document.querySelector("#followers-info");
    const following = document.querySelector("#following-info");
    const location = document.querySelector("#location-info");
    const website = document.querySelector("#website-info");
    const twitter = document.querySelector("#twitter-info");
    const company = document.querySelector("#company-info");

    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/583231?v=4"
    );
    name.innerHTML = "The Octocat";
    joined.innerHTML = "25 Jan 2011";
    userName.innerHTML = "@octocat";
    description.innerHTML =
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
    repos.innerHTML = "8";
    followers.innerHTML = "3938";
    following.innerHTML = "9";
    location.innerHTML = "San Fransisco";
    website.innerHTML = "https://github.blog";
    twitter.innerHTML = "Not Available";
    company.innerHTML = "@github";
  }
};
