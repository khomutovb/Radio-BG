$(document).ready(function() {
    $("[data-toggle]").click(function() {
        if (!$(this).data('status')) {
            $(".logo").hide("fast");
            $(this).addClass("fa fa-bars fa-lg");
            $(this).removeClass("fa fa-bars fa-lg");
            $(this).addClass("fa fa-times fa-lg");
            $(this).data('status', true);
          }
          else {
            $(this).removeClass("fa fa-times fa-lg");
            $(this).addClass("fa fa-bars fa-lg");
            $(this).data('status', false);
          }
        
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("open-sidebar");
		$(".logo").css("display","block"); 
		
	});
 $("#opensc").click(function(){
        var height = $( 'body' ).height();
        $( '.wrapper' ).css("top",height); 
	$(".wrapper").toggleClass('opened'); 
    if($(".wrapper").hasClass('opened')) {
        $("#opensc").html('Close soundcloud');
    }
    else {
        $("#opensc").html('Open soundcloud');
    }
});
$("#opensc").click(function(){
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	$('html, body').animate({ scrollTop: destination }, 2000);
}); 
 /* $("#opensc").click(function(){
	$("#opensc").hide();
	$(".wrapper").toggleClass('opened');
    if($(".wrapper").hasClass('opened')) {
	var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 2000);
        $("#opensc").html('Close soundcloud');
    }
    else {
        $("#opensc").html('Open soundcloud');
    }
});  */
$(".swipe-area").swipe({
    swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="right") {
                $(".logo").hide("fast");
                $("[data-toggle]").addClass("fa fa-bars fa-lg");
                $("[data-toggle]").removeClass("fa fa-bars fa-lg");
                $("[data-toggle]").addClass("fa fa-times fa-lg");
                $("[data-toggle]").data('status', true);
                 $(".container").addClass("open-sidebar");
                 return false;
            }
            if (phase=="move" && direction =="left") {
                $("[data-toggle]").removeClass("fa fa-times fa-lg");
                $("[data-toggle]").addClass("fa fa-bars fa-lg");
                $("[data-toggle]").data('status', false);
                
                 $(".container").removeClass("open-sidebar");
                 $(".logo").css("display","block");
                 return false;
            }
        }
    })
});