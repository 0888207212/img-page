const list = document.querySelectorAll("header nav a");
let sec = document.querySelectorAll("section");

window.onscroll = () => {
  sec.forEach((section) => {
    let top = window.scrollY;
    let offSet = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offSet && top < offSet + height) {
      list.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const checkbox = document.querySelector(".checkbox_snow");
const snowEffect = document.querySelector(".snow-wrap");
checkbox.checked = true;
function showSnow() {
  if (!checkbox.checked) {
    snowEffect.style.display = "none";
    snowEffect.style.transition = "0.5s";
  } else {
    snowEffect.style.display = "block";
    snowEffect.style.transition = "0.5s";
  }
}
document
  .querySelector(".section-1_checkbox")
  .addEventListener("click", showSnow);

let imgBx = document.querySelectorAll(".imgBx");
imgBx.forEach((popup) =>
  popup.addEventListener("click", () => {
    popup.classList.toggle("active");
  })
);

let text = document.querySelector(".section-1_title");
console.log(111, text.innerHTML);
text.innerHTML = text.innerText
  .split("")
  .map(
    (letters, i) =>
      `<span style="transition-delay:${i * 40}ms; filter:hue-rotate(${
        i * 30
      }deg)">${letters}</span>`
  )
  .join("");
