window.onload = function () {
  const img = document.querySelector(".user__img");
  const name = document.querySelector(".user__name");
  const userName = document.querySelector(".user__username");
  const description = document.querySelector(".description");
  const repos = document.querySelector("#repos-info");
  const followers = document.querySelector("#followers-info");
  const following = document.querySelector("#following-info");
  const location = document.querySelector("#location-info");
  const website = document.querySelector("#website-info");
  const twitter = document.querySelector("#twitter-info");
  const company = document.querySelector("#company-info");

  img.setAttribute("src", "https://avatars.githubusercontent.com/u/583231?v=4");
  name.innerHTML = "The Octocat";
  userName.innerHTML = "@octocat";
  description.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe libero aliquid alias explicabo! Quis nisi eos laborum quasi illo sit. Consequuntur cupiditate cumque porro officia, rem cum quae commodi.";
  repos.innerHTML = "8";
  followers.innerHTML = "3938";
  following.innerHTML = "9";
  location.innerHTML = "San Fransisco";
  website.innerHTML = "https://github.blog";
  twitter.innerHTML = "Not Available";
  company.innerHTML = "@github";
};
