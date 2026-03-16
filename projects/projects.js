document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("seeMoreBtn");
  const moreProjects = document.querySelector(".more-projects");

  btn.addEventListener("click", () => {
    if (moreProjects.style.display === "grid") {
      moreProjects.style.display = "none";
      btn.textContent = "See More Projects";
    } else {
      moreProjects.style.display = "grid";
      btn.textContent = "Hide Projects";
    }
  });
});
