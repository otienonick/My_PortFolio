// navbar scroll
$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY > 30){
        $('.navbar').addClass('sticky'); 
    }else{
        $('.navbar').removeClass('sticky'); 
    }
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass('show');

    }else{
        $('.scroll-up-btn').removeClass('show');
            
    } 
});

// slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});



// toggle menubar
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');

});

// typing animation script
 var typed = new Typed('.typing',{
     strings:['Frontend Developer.','Backend Developer.','UI/UX Designer.'],
     typeSpeed: 100,
     backSpeed: 50,
     loop: true

 });
 var typed = new Typed('.typing-2',{
    strings:['Frontend Developer.','Backend Developer.','UI/UX Designer.'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true

});

// owl carousel script
$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }

})

});