// import "./_vendor";
import vars from "./_vars";
import "./_functions";
// import "./_components/ex";

("use strict");

window.addEventListener("DOMContentLoaded", () => {
  showAnimation();
  function showAnimation() {
    // анимируемый объект
    let aos = document.querySelectorAll(".aos");
    let lazyEls = document.querySelectorAll(".lazy-inner");

    // параметры
    let config = {
      rootMargin: "0px",
      threshold: 0.7,
    };
    let config2 = {
      rootMargin: "50px 0px 50px 0px",
    };

    // aos
    let observer = new IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectionHandler(entry);
        }
      });
    }, config);

    // lazy
    let observer2 = new IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectionHandler2(entry);
        }
      });
    }, config2);

    // вызов aos
    aos.forEach((item) => {
      observer.observe(item);
    });

    // вызов lazy
    lazyEls.forEach((el) => {
      observer2.observe(el);
    });

    // тело aos
    function intersectionHandler(entry) {
      entry.target.classList.add("--animated");
    }

    // тело lazy
    function intersectionHandler2(entry) {
      if (entry.target.classList.contains("contacts")) ymaps.ready(initMap);
      entry.target.querySelectorAll(".lazy").forEach((img) => {
        if (img.hasAttribute("data-src") || img.hasAttribute("data-scrset")) {
          if (img.hasAttribute("data-src")) {
            img.src = img.getAttribute("data-src");
            img.removeAttribute("data-src");
          }
          img.srcset = img.getAttribute("data-srcset");
          img.removeAttribute("data-srcset");
          img.style.display = "block";
        }
      });
    }

    // accordion
    showContent();
    function showContent() {
      let btns = document.querySelectorAll(".faq-accordion__control");
      btns.forEach((btn) => {
        btn.addEventListener("click", function () {
          this.parentElement.classList.toggle("open");
          this.setAttribute("aria-expanded", "true");
          this.nextElementSibling.setAttribute("aria-hidden", "false");
        });
      });
    }
  }

  // add map in site
  function initMap() {
    let mapPos = [56.322, 44.011];
    let map = new ymaps.Map("map1", {
      center: mapPos,
      zoom: 17,
    });

    let placemark = new ymaps.Placemark(
      mapPos,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/svg/map-point.svg",
        iconImageSize: [70, 70],
        iconImageOffset: [-45, -80],
      }
    );

    map.controls.remove("geolocationControl");
    map.controls.remove("searchControl");
    map.controls.remove("trafficControl");
    map.controls.remove("typeSelector");
    map.controls.remove("fullscreenControl");
    map.controls.remove("zoomControl");
    map.controls.remove("rulerControl");

    map.geoObjects.add(placemark);
  }
});
