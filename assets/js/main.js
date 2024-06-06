$(document).ready(function(){

    $('.menu-bar .toggle-bar').on('click',function(e){
        e.preventDefault()
        $('.menu-items.mobile').addClass('active')
        $(this).removeClass('active')
        $('.menu-bar .toggle-close').addClass('active')
    })

    $('.menu-bar .toggle-close').on('click',function(e){
        e.preventDefault()
        $('.menu-items.mobile').removeClass('active')
        $(this).removeClass('active')
        $('.menu-bar .toggle-bar').addClass('active')
    })


    $('body').delegate('.tabs button.btn', 'click',(e)=>{

        let tab=e.target.dataset.tab
        
        if(tab==1){
            $("#button-fill").css("width", "38%");
            $("#button-fill").css("left", "3%");
        }

        if(tab==2){
            $("#button-fill").css("width", "30%");
            $("#button-fill").css("left", "38%");
        }

        if(tab==3){
            $("#button-fill").css("width", "32%");
            $("#button-fill").css("left", "65%");
        }

        let tab_btn_id=`#tab-btn-${tab}`;
        let tab_id=`#tab-${tab}`;
        $('.tabs button.btn').removeClass('active')
        $(tab_btn_id).addClass('active')
        $('.tab-info').removeClass('active')
        $(tab_id).addClass('active')
    })


    /* ======== Fixed Scroll =========*/
    window.onscroll = function() {
        var reveals = document.querySelectorAll('.reveal');
        for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }

        var scroll = $(window).scrollTop();
        if(scroll > 500){
            $('body').addClass('fixed-header')
        }else{
            $('body').removeClass('fixed-header')
            
        }
        
    };


    /*========== Counter ============*/

    $('.shared-success').mouseenter(function(){
        const counters = document.querySelectorAll('.value');
        const speed = 400;

        counters.forEach( counter => {
        const animate = () => {
            const value = +counter.getAttribute('counter');
            const data = +counter.innerText;
            
            const time = value / speed;

            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                console.log(counter.innerText)
                setTimeout(animate, 1);
            }else{
                counter.innerText = value;
            }
        }

        animate();
        });
    });

    // =========== CARD CAROWSEL =========
    $('.card-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav: true,
        dots: false,
        center: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    // ================ MODAL ============
    $('#get-in-touch-btn').on('click',function(){
        $('#get-in-touch-popup').modal('show')
    })

    $('.close').on('click',function(){
        $('#get-in-touch-popup').modal('hide')
    })
    
    

})