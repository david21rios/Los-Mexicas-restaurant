const about = document.querySelector(".about2");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const img = document.getElementById("img-about");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    console.log("id=" + id);
    const nombImg = id+".jpg";
    console.log(nombImg);
    img.src = nombImg;
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
