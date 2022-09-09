document.addEventListener("keyup", function (e) {
  if (e.keyCode === 71) {
    document.querySelector(".grid-overlay").classList.toggle("show");
  }
});

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

$(document).ready(function () {
  var $carousel = $(".carousel").flickity({
    cellAlign: "center",
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
  });
  $(".carousel-nav").flickity({
    asNavFor: ".carousel",
    contain: true,
    pageDots: false,
    wrapAround: true,
    cellAlign: "center",
    prevNextButtons: false,
  });
  // variable for highest height
  //   let maxHeight = 0;

  //   // defining what im looping through, which in this case is .each .slide inside of .carousel
  //   $(".carousel .slide-image.match-height").each(function () {
  //     // this is referring to the slide in question thats being looped through
  //     let thisHeight = $(this).outerHeight(true);
  //     // simple if loop
  //     if (thisHeight < maxHeight) {
  //       maxHeight = thisHeight;
  //     }
  //     console.log(maxHeight);
  //   });

  //   $(".carousel .slide-image.match-height").css({ height: maxHeight + "px" });
});
