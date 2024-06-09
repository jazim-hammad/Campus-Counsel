document.getElementById("mobile-menu").addEventListener("click", function () {
  var links = document.querySelector(".nav-links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
