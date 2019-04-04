$(document).ready(function () {
    $("#opensc").click(function(){
        $(".wrapper").toggleClass('opened'); 
        if($(".wrapper").hasClass('opened')) {
            $("#opensc").html('Close soundcloud');
            var height = $(document).height();
            $(height) + $(".wrapper").css("top", height);
        }
        else {
            $("#opensc").html('Open soundcloud');
            $(".wrapper").css("top", 0);
            
        }
    });
    $("#opensc").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 2000);
    });
});