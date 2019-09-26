
 // Initiate the wowjs animation library
 new WOW().init();
 


$(document).ready(function() {

	// Smooth Scrolling
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Active Link Switching
    var scrollLink = $('.scroll');
    $(window).scroll(function(){
        var scrollableLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top

            if(sectionOffset <= scrollableLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    // Closes responsive menu when a scroll trigger link is clicked
    scrollLink.on("click", function () {
        $('.navbar-collapse').collapse('hide');
    });

});