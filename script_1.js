$(function () {
    $(document).on("scroll", function () {
        $(window).scrollTop() > 100 ? $(".scroll-top-wrapper").addClass("show") : $(".scroll-top-wrapper").removeClass("show")
    }), $(".scroll-top-wrapper").on("click", scrollToTop)
});