$(document).ready(function () {
    $("[data-toggle]").click(function () {
        if (!$(this).data('status')) {
            $(".swipe-area").css("padding-left","130x")
            $(".logo").hide("fast");
            $(this).addClass("fa fa-bars fa-lg");
            $(this).removeClass("fa fa-bars fa-lg");
            $(this).addClass("fa fa-times fa-lg");
            $(this).data('status', true);
        }
        else {
            $(".swipe-area").css("padding-left","55px")
            $(this).removeClass("fa fa-times fa-lg");
            $(this).addClass("fa fa-bars fa-lg");
            $(this).data('status', false);
        }

        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
        $(".logo").css("display", "block");

    });
$(".swipe-area").swipe({
    swipeStatus: function (event, phase, direction, distance, duration, fingers) {
        if (phase == "move" && direction == "right") {
            $(".swipe-area").css("padding-left","130px")
            $(".logo").hide("fast");
            $("[data-toggle]").addClass("fa fa-bars fa-lg");
            $("[data-toggle]").removeClass("fa fa-bars fa-lg");
            $("[data-toggle]").addClass("fa fa-times fa-lg");
            $("[data-toggle]").data('status', true);
            $(".container").addClass("open-sidebar");
            return false;
        }
        if (phase == "move" && direction == "left") {
            $(".swipe-area").css("padding-left","55px")
            $("[data-toggle]").removeClass("fa fa-times fa-lg");
            $("[data-toggle]").addClass("fa fa-bars fa-lg");
            $("[data-toggle]").data('status', false);

            $(".container").removeClass("open-sidebar");
            $(".logo").css("display", "block");
            return false;
        }
    }
})
});