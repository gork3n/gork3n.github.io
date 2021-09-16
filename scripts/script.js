const space = document.querySelector(".stars");
const starsMax = 200;

// Functions
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStar() {
  const star = document.createElement("span");
  star.classList.add("star");

  // size & glow
  const glow = random(3, 5);
  const size = (star.style.width = random(1, 5) + "px");
  star.style.width = size;
  star.style.height = size;

  if (size == "1px") {
    star.style.background = "rgba(255, 0, 0, 0.5)";
    star.style.boxShadow =
      "0px 0px " + glow + "px " + glow / 1.6 + "px   rgba(255, 0, 0, 0.4)";
  } else if (size == "2px") {
    star.style.background = "rgba(255, 255, 255, 0.5)";
    star.style.boxShadow =
      "0px 0px " + glow + "px " + glow / 1.6 + "px   rgba(255, 255, 255, 0.3)";
  } else if (size == "3px") {
    star.style.background = "rgba(229, 229, 62, 0.5)";
    star.style.boxShadow =
      "0px 0px " + glow + "px " + glow / 1.6 + "px   rgba(229, 229, 62, 0.3)";
  } else {
    star.style.background = "rgba(99, 168, 191, 0.5)";
    star.style.boxShadow =
      "0px 0px " + glow + "px " + glow / 1.6 + "px   rgba(99, 168, 191, 0.3)";
  }

  // position
  star.style.top = random(2, 98) + "%";
  star.style.left = random(2, 98) + "%";

  // animation
  star.style.animationDuration = random(2000, 5000) + "ms";

  space.appendChild(star);
}

function populateSpace(nbr) {
  for (var i = 0; i < nbr; i++) {
    createStar();
  }
}

populateSpace(100);
