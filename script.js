const toggleButton = document.querySelector(".toggle-mode");
const root = document.documentElement;

const input = document.querySelector("input");
const btn = document.querySelector(".searchbtn");
const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".joinedDate");
const repo = document.querySelector(".repoTotal");
const followers = document.querySelector(".follwerTotal");
const following = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twitter = document.querySelector(".twitter");
const websites = document.querySelector(".website");
const companies = document.querySelector(".companies");
const githubBio = document.querySelector(".githubBio");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");

btn.addEventListener("click", function () {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    const dateData = data.created_at.slice(0, data.created_at.length - 10);
    img.src = data.avatar_url;
    block.appendChild(img);
    block.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `joined ${data.dateData}`;
    repo.innerHTML = data.public_repos;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;

    locations.innerHTML =
      data.location === "" || data.location === null
        ? "No location"
        : data.location;
    twitter.innerHTML =
      data.twitter_username === "" || data.twitter_username === null
        ? "No twitter"
        : data.twitter_username;
    websites.innerHTML =
      data.blog === "" || data.blog === null ? "No website" : data.blog;
    companies.innerHTML =
      data.company === "" || data.company === null
        ? "No company"
        : data.company;
    githubBio.innerHTML =
      data.bio === "" || data.bio === null ? "No Bio" : data.bio;
  }
  getUrl();
  input.value = "";
});

toggleButton.addEventListener("click", () => {
  if (root.getAttribute("color-mode") === "light") {
    root.setAttribute("color-mode", "dark");
    toggleButton.classList.remove("light");
    toggleButton.classList.add("dark");
  } else {
    root.setAttribute("color-mode", "light");
    toggleButton.classList.remove("dark");
    toggleButton.classList.add("light");
  }
});
