(function ($) {
    "use strict";

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


    //About page

    $(".about-text").on('click', function () {
        $("body").addClass("about-on");
    });
    $(".about-close").on('click', function () {
        $("body").removeClass("about-on");
    });


    //Contact page

    $(".contact-text").on('click', function () {
        $("body").addClass("contact-on");
    });
    $(".contact-close").on('click', function () {
        $("body").removeClass("contact-on");
    });


    //Travel portfolio page

    $(".travel").on('click', function () {
        $("body").addClass("travel-on");
    });
    $(".travel-close").on('click', function () {
        $("body").removeClass("travel-on");
    });


    //Wildlife portfolio page

    $(".certification").on('click', function () {
        $("body").addClass("certification-on");
    });
    $(".certification-close").on('click', function () {
        $("body").removeClass("certification-on");
    });


    //Nature portfolio page

    $(".resume").on('click', function () {
        $("body").addClass("resume-on");
    });
    $(".resume-close").on('click', function () {
        $("body").removeClass("resume-on");
    });


})(jQuery); 