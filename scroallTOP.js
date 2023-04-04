let scroalladd = document.querySelector(".scroalladd");
scroalladd.innerHTML = `<div id="scrollmy"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
<path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
</svg></div>`;

const scrollmy = document.querySelector("#scrollmy");

window.addEventListener("scroll", w);

function w() {
  if (scrollY >= 400) {
    scrollmy.style.display = "block";
  } else {
    scrollmy.style.display = "none";
  }
}

scrollmy.addEventListener("click", () => {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// set style
let scrollMY = document.querySelector("#scrollmy");
scrollMY.style.cssText =
  "position: fixed;width: 40px;height: 40px;background: var(--green);bottom: 10px;right: 10px;font-size: 30px;font-weight: 600;display: none;cursor: pointer;border-radius: 6px; box-shadow: var(--box-shadow);";

let scrollMYsvg = document.querySelector("#scrollmy svg");
scrollMYsvg.style.cssText =
  "display:block; margin-right: auto;margin-left: auto;";
