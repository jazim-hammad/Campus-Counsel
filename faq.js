document.addEventListener("DOMContentLoaded", function () {
  const questionBtns = document.querySelectorAll(".question-btn");

  questionBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("active");
      rotateArrow(this);
    });
  });

  function rotateArrow(btn) {
    const arrow = btn.querySelector(".arrow");
    arrow.classList.toggle("up");
  }
});
