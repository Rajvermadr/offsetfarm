$(document).ready(function(){

    $('.menu-bar .toggle-bar').on('click',function(e){
        e.preventDefault()
        $('.menu-items.mobile').addClass('active')
        $(this).removeClass('active')
        $('.menu-bar .toggle-close').addClass('active')
    })

    $('.toggle-close').on('click',function(e){
        e.preventDefault()
        $('.menu-items.mobile').removeClass('active')
        $(this).removeClass('active')
        $('.menu-bar .toggle-bar').addClass('active')
    })

    $('body').delegate('#header-section li.nav-item','click',(e)=>{
        $('#header-section li.nav-item').removeClass('active')
        let nav=e.currentTarget.dataset.nav
        let nav_id=`#nav-item-${nav}`
        $(nav_id).addClass('active')
    })


    $('body').delegate('.tabs button.btn', 'click',(e)=>{

        let tab=e.target.dataset.tab
        
        if(tab==1){
            $("#button-fill").removeClass('tab-btn-2')
            $("#button-fill").removeClass('tab-btn-3')
            $("#button-fill").addClass('tab-btn-1')
        }

        if(tab==2){

            $("#button-fill").removeClass('tab-btn-1')
            $("#button-fill").removeClass('tab-btn-3')
            $("#button-fill").addClass('tab-btn-2')
        }

        if(tab==3){

            $("#button-fill").removeClass('tab-btn-1')
            $("#button-fill").removeClass('tab-btn-2')
            $("#button-fill").addClass('tab-btn-3')
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

    // ============== SEND EMAIL ===========
    $('#alert-message').html('')
    $('body').delegate('button[type=submit]','click',function(e){
        e.preventDefault()

        $(this).html('<div class="loader"></div>')

        let fullname      = $('#full-name').val()
        let email         = $('#id-email').val()
        let mobile        = $('#contact-number').val()
        let message    = $('#id_message').val()
        emailjs.init({
            publicKey: 'HQ9L9fQSZ3awnboiw',
        });

        let templateParams = {
            name: fullname,
            email: email,
            mobile: mobile,
            message: message,
          };

        if(fullname !='' && email!='' &&  mobile !=''){
            emailjs.send('service_d0xnen5', 'template_ejn736b', templateParams).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                    $('#letstalkform')[0].reset();
                    $('#alert-message').removeClass('danger')
                    $('#alert-message').addClass('success')
                    $('#alert-message').html('Successfully submited!')
                    $(this).html('Submit')
                
                },
                (error) => {
                  console.log('FAILED...', error);
                  $('#alert-message').removeClass('success')
                  $('#alert-message').addClass('danger')
                  $('#alert-message').html('Something went wrong!')
                  $(this).html('Submit')
                },
            );
        }else{
            $('#alert-message').removeClass('success')
            $('#alert-message').addClass('danger')
            $('#alert-message').html('All fields are required!')
            $(this).html('Submit')
        }

       
    });

   
    
      
      
    
    

})