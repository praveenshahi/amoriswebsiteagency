document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
});
