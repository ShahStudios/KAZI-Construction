/* =========================================
               Portfolio
============================================ */
$(window).on("load", function() {
  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on("click", "button", function() {
    // get filter value
    var filterValue = $(this).attr("data-filter");

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});
/* =========================================
               Portfolio
============================================ */

/* =========================================
               Magnifier
============================================ */
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
/* =========================================
               Magnifier
============================================ */

/* =========================================
                Wow-Animation
============================================ */
$(function() {
  new WOW().init();
});
/* =========================================
                Wow-Animation
============================================ */

/* =========================================
                Tab-Section
============================================ */
$("#tab-section li").click(function() {
  // Add active class to active link
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
  // Hide all divs on click
  $("#tab-section .tabs-content > div").hide();
  //show div
  $("." + $(this).data("class")).show();
});
$.fn.jQuerySimpleCounter = function(options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: ""
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    }
  );
};
$("#number1").jQuerySimpleCounter({ end: 12, duration: 4100 });
$("#number2").jQuerySimpleCounter({ end: 55, duration: 4300 });
$("#number3").jQuerySimpleCounter({ end: 359, duration: 4500 });
$("#number4").jQuerySimpleCounter({ end: 246, duration: 4700 });
/* =========================================
                Tab-Section
============================================ */

/* =========================================
                Go-To-Top
============================================ */
$(document).ready(function() {
  // declare variable
  var scrollTop = $(".go-top.show");
  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();
    // if user scrolls down - show scroll to top button
    if (topPos > 900) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); // scroll END
  //Click event to scroll to top
  $(scrollTop).click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1800
    );
    return false;
  }); // click() scroll top EMD
});
/* =========================================
                Go-To-Top
============================================ */


/* =========================================
              Start: Navigation
============================================ */
// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1500,
      "easeInOutExpo"
    );
  });
});
/* =========================================
              End:Navigation
============================================ */