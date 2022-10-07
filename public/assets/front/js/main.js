(function ($) {
  "use strict";

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  //Update Header Style and Scroll to Top
  function headerStyle() {
    if ($(".main-header").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".main-header");
      var scrollLink = $(".scroll-to-top");
      var sticky_header = $(".main-header .sticky-header");
      if (windowpos > 100) {
        siteHeader.addClass("fixed-header");
        sticky_header.addClass("animated slideInDown");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        sticky_header.removeClass("animated slideInDown");
        scrollLink.fadeOut(300);
      }
    }
  }
  headerStyle();

  //Submenu Dropdown Toggle
  if ($(".main-header li.dropdown ul").length) {
    $(".main-header .navigation li.dropdown").append(
      '<div class="dropdown-btn"><span class="fa fa-plus"></span></div>'
    );
  }

  //Mobile Nav Hide Show
  if ($(".mobile-menu").length) {
    var mobileMenuContent = $(
      ".main-header .nav-outer .main-menu .navigation"
    ).html();
    $(".mobile-menu").append(
      '<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>'
    );
    $(".mobile-menu .navigation").append(mobileMenuContent);
    $(".sticky-header .navigation").append(mobileMenuContent);
    $(".mobile-menu .close-btn").on("click", function () {
      $("body").removeClass("mobile-menu-visible");
    });
    //Dropdown Button
    $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
      $(this).prev("ul").slideToggle(500);
      $(this).toggleClass("active");
    });
    //Menu Toggle Btn
    $(".mobile-nav-toggler").on("click", function () {
      $("body").addClass("mobile-menu-visible");
    });

    //Menu Toggle Btn
    $(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
      "click",
      function () {
        $("body").removeClass("mobile-menu-visible");
      }
    );
  }

  ///Side Content Toggle
  if ($(".main-header .outer-box .sidebar-btn").length) {
    //Show Form
    $(".main-header .outer-box .sidebar-btn").on("click", function (e) {
      e.preventDefault();
      $("body").addClass("side-content-visible");
    });
    //Hide Form
    $(".hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu").on(
      "click",
      function (e) {
        e.preventDefault();
        $("body").removeClass("side-content-visible");
      }
    );
  }

  /*Banner Section Two */
  if ($(".banner-section-two").length) {
    $(".banner-section-two").appear(function () {
      $(this).addClass("active");
    });
  }

  // Banner Carousel / Owl Carousel
  if ($(".banner-carousel").length) {
    $(".banner-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 300,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 10000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  //Project Carousel
  if ($(".team-carousel").length) {
    $(".team-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  //Services Carousel
  if ($(".services-carousel").length) {
    $(".services-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1280: {
          items: 4,
        },
      },
    });
  }

  //Services Carousel Two
  if ($(".services-carousel-two").length) {
    $(".services-carousel-two").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  //Certificate Carousel Two
  if ($(".certificate-carousel").length) {
    $(".certificate-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      smartSpeed: 700,
      autoplay: 5000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
  }

  //Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 700,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 2,
        },
      },
    });
  }

  //Testimonial Carousel Two
  if ($(".testimonial-carousel-two").length) {
    $(".testimonial-carousel-two").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      smartSpeed: 700,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 2,
        },
      },
    });
  }

  //Project Carousel
  if ($(".project-carousel").length) {
    $(".project-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      smartSpeed: 700,
      autoplay: false,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1280: {
          items: 4,
        },
        1600: {
          items: 5,
        },
      },
    });
  }

  //Sponsors Carousel
  if ($(".sponsors-carousel").length) {
    $(".sponsors-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 700,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1024: {
          items: 4,
        },
        1400: {
          items: 5,
        },
        1920: {
          items: 6,
        },
      },
    });
  }

  //Single Item Carousel
  if ($(".single-item-carousel").length) {
    $(".single-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 700,
      autoplay: true,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }

  /* always keep at least 1 open by preventing the current to close itself */
  $('[data-toggle="collapse"]').on("click", function (e) {
    if ($(this).parents(".accordion").find(".collapse.show")) {
      var idx = $(this).index('[data-toggle="collapse"]');
      if (idx == $(".collapse.show").index(".collapse")) {
        // prevent collapse
        e.stopPropagation();
      }
    }
  });

  //Accordion Box
  $(".accordion-box").on("click", ".acc-btn", function () {
    alert("console.log");
    console.log("hellopra");
    var outerBox = $(this).parents(".accordion-box");
    var target = $(this).parents(".accordion");

    if ($(this).hasClass("active") !== true) {
      $(outerBox).find(".accordion .acc-btn").removeClass("active ");
    }

    if ($(this).next(".acc-content").is(":visible")) {
      return false;
    } else {
      $(this).addClass("active");
      $(outerBox)
        .children(".accordion")
        .removeClass("active-block animated fadeInUp");
      $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
      target.addClass("active-block animated fadeInUp");
      $(this).next(".acc-content").slideDown(300);
    }
  });

  //Tabs Box
  $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("data-tab"));

    if ($(target).is(":visible")) {
      return false;
    } else {
      target
        .parents(".tabs-box")
        .find(".tab-buttons")
        .find(".tab-btn")
        .removeClass("active-btn");
      $(this).addClass("active-btn");
      target.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
      target
        .parents(".tabs-box")
        .find(".tabs-content")
        .find(".tab")
        .removeClass("active-tab animated fadeIn");
      $(target).fadeIn(300);
      $(target).addClass("active-tab animated fadeIn");
    }
  });

  //Product Tabs
  $(".project-tab .tab-btns .tab-btn").on("click", function (e) {
    e.preventDefault();
    var target = $($(this).attr("data-tab"));

    if ($(target).hasClass("actve-tab")) {
      return false;
    } else {
      $(".project-tab .tab-btns .tab-btn").removeClass("active-btn");
      $(this).addClass("active-btn");
      $(".project-tab .tabs-content .tab").removeClass("active-tab");
      $(target).addClass("active-tab");
    }
  });

  // Scroll to a Specific Div
  $(".scroll-to-target").on("click", function () {
    var target = $(this).attr("data-target");
    // animate
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1500
    );
  });

  /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

  $(window).on("scroll", function () {
    headerStyle();
  });

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */

  $(window).on("load", function () {
    handlePreloader();
  });
})(window.jQuery);

// script-1
$(document).ready(function () {
  if ($(".banner-carousel-index").length) {
    $(".banner-carousel-index").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 500,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 6000,
      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }
});

// script-2
$(document).ready(function () {
  $(".packages_caroseul_dsg.owl-carousel").owlCarousel({
    loop: false,
    margin: 0,
    smartSpeed: 700,
    autoplay: false,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".packages_caroseul_dsg_another.owl-carousel").owlCarousel({
    loop: false,
    margin: 0,
    smartSpeed: 700,
    autoplay: false,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    nav: false,
    dots: true,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });

  const elem = document.querySelector("#major_package");
  if (elem) {
    const rect = elem.getBoundingClientRect();
    $(".content_package").css({ "min-height": rect.height });
  }
});

// script-3
$("#readMoreWhyChooseUs").click(function () {
  $(".showTextOnClick").toggle();
  $(this).children(".btn-title").toggleText("Read More", "Show Less");
});

// script-4
$(document).ready(function () {
  $(document).ready(function () {
    $(".address_container .owl-theme").owlCarousel({
      loop: false,
      rewind: true,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 700,
      autoplay: 5000,
      autoscroll: true,

      navText: [
        '<span class="fa fa-angle-left"></span>',
        '<span class="fa fa-angle-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  });

  $(".our_partners_wrapper .owl-theme").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });
});

// script-5


// script-6
$(document).ready(function () {
  $(".testimonials_container .owl-theme").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    smartSpeed: 700,
    autoplay: 5000,
    navText: [
      '<span class="fa fa-angle-left"></span>',
      '<span class="fa fa-angle-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

// script-7
$(document).ready(function () {
  $(".loginSignUpDsg li").click(function () {
    $(".loginSignUpDsg li").removeClass("active");
    $(this).addClass("active");
  });
  $("#country").change(function () {
    var cc_prefix = $(this).find(":selected").data("cc_prefix");
    $("#cc_prefix").val(cc_prefix);
    $("#cc_prefix").text(cc_prefix);
  });

  document.querySelector("#phone").addEventListener("keypress", function (evt) {
    var len = $(this).val().length;
    // alert(len);
    if (len > 9) {
      evt.preventDefault();
    }

    if (
      (evt.which != 8 && evt.which != 0 && evt.which < 48) ||
      evt.which > 57
    ) {
      evt.preventDefault();
    }
  });


});

async function checkStyleSheet(url) {
  var found = false;
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == url) {
      found = true;
      break;
    }
  }
  if (!found) {
    $("head").append(
      $('<link rel="stylesheet" type="text/css" href="' + url + '" />')
    );
  }
}

async function loadScript(url, callback) {
  callback = typeof callback != "undefined" ? callback : {};

  $.ajax({
    type: "GET",
    url: url,
    success: callback,
    dataType: "script",
    cache: true,
  });
}

$(document).ready(function () {
  $(".to-recover").on("click", function () {
    $("#loginForm").hide();
    $("#signUpform").hide();
    $("#recoverform").fadeIn();
  });
  $(".to-login").click(function () {
    $("#recoverform").hide();
    $("#signUpform").hide();
    $("#loginForm").fadeIn();
  });
  $(".to-signUp").click(function () {
    $("#recoverform").hide();
    $("#signUpform").fadeIn();
    $("#loginForm").hide();
  });



  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhone(phone) {
    var re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(phone);
  }

  var $sections = $(".form-section");

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections.removeClass("current").eq(index).addClass("current");
    // Show only the navigation buttons that make sense for the current section:
    $(".form-navigation .previous").toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $(".form-navigation .next").toggle(!atTheEnd);
    $(".form-navigation [type=submit]").toggle(atTheEnd);
  }

  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter(".current"));
  }

  // Previous button is easy, just go back
  $(".form-navigation .previous").click(function () {
    navigateTo(curIndex() - 1);
  });

  // Next button goes forward iff current block validates


  $(".move_to_initial").click(function () {
    navigateTo(0);
  });


  $("#varifyAccountLogin").click(function () {
    var verficationCode = $("#v_code_login").val();
    verifyAccount(verficationCode);
  });
  $(".move_to_initial_login").click(function () {
    $("#loginInitial").show();
    $("#accountVerification").hide();
  });

  $("#varifyAccount").click(function () {
    var verficationCode = $("#v_code").val();
    verifyAccount(verficationCode);
  });



  $(".listenMe").on("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      //document.getElementById("myBtn").click();
      var triggerAction = $(this).attr("btnToListen");
      $("#" + triggerAction).trigger("click");
    }
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function (index, section) {
    $(section)
      .find(":input")
      .attr("data-parsley-group", "block-" + index);
  });
  navigateTo(0); // Start at the beginning



  $(".showMoreServicePackage").click(function () {
    $(this).parent("ul").children("li:nth-child(n+5)").toggle();
    $(this).toggleText("Show More", "Show Less");
  });
  $.fn.extend({
    toggleText: function (a, b) {
      return this.text(this.text() == b ? a : b);
    },
  });
});

$(document).on("click", ".callNowBtn", function () {
  var number = $(this).attr("data-number");
  var myText = $(this).children(".btn-title").html();
  $(this)
    .children(".btn-title")
    .html("<i class='fas fa-phone rotated mr-2'></i> " + number);
  setTimeout(() => {
    $(this).children(".btn-title").html(myText);
  }, 6000);
});

// gallery images
$(document).ready(function () {
  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    callbacks: {
      elementParse: function (item) {
        console.log(item.el[0].className);
        if (item.el[0].className == "video") {
          (item.type = "iframe"),
            (item.iframe = {
              patterns: {
                youtube: {
                  index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                  id: "v=", // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }

                  src: "//www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
                },
                vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                gmaps: {
                  index: "//maps.google.",
                  src: "%id%&output=embed",
                },
              },
            });
        } else {
          (item.type = "image"),
            (item.tLoading = "Loading image #%curr%..."),
            (item.mainClass = "mfp-img-mobile"),
            (item.image = {
              tError:
                '<a href="%url%">The image #%curr%</a> could not be loaded.',
            });
        }
      },
    },
  });
});

(function () {
  if (window.history && window.history.pushState) {
    $(window).on("popstate", function () {
      location.reload();
    });
  }
})();
