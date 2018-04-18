;(function($) {
    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var translateWidth = 0;

    $(document).ready(function() {
        var switchInterval = nextSlide;

        $('#viewport').hover(function() {
            clearInterval(switchInterval);
        }, function() {
            switchInterval = nextSlide;
        });

        $('#next-btn').on('click',function() {
            nextSlide();
        });

        $('#prev-btn').on('click',function() {
            prevSlide();
        });
        $(".logo").on('click', function () {
            console.log('test');
            $('.nav-right').toggleClass('nav-open');

        })
    });


    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow++;
        }
    }

    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -$('#viewport').width() * (slideCount - 1);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow = slideCount;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)'
            });
            slideNow--;
        }
    }




        $(function() {
            $('.menu__icon').on('click', function() {
                $(this).closest('.menu').toggleClass('menu_state_open');
            });
        });

})(jQuery);