
   /* let ibg = document.querySelectorAll(".ibg"); 
    for (var i = 0; i < ibg.length; i++) 
    { 
        if(ibg[i].querySelector('img'))
        {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
        } 
    }*/

    $(document).on('ready', function() {
        $(".lazy").slick({
            dots: true,
            arrows: false,
            autoplay: false,
            adaptiveHeight: true,
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true
        });

        $('.header__burger').click(function(){
            $(this).toggleClass('active');
            $('.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
        })
    });
        
