window.addEventListener("scroll", () => {
  const toTopLink = document.getElementById("toTopLink");

  if (window.scrollY > 800 ) {
    toTopLink.classList.remove("hidden");
  } else {
    toTopLink.classList.add("hidden");
  }
});
