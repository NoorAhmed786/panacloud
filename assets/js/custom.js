$(document).ready(function(){
    if($('.gallery').length){
        $('.banner').slick(
            {
                dots: true,
                arrows: true,
                //infinite: true,
                //speed: 500,
                //fade: true,
                //cssEase: 'linear',
                slidesToShow: 1,
                autoplay: true,
            }
        );
           
    }

})