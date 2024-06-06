//number-counting
$('.stat-number').each(function () {
   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
   $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
   }, {
      duration: 2000,
      step: function (func) {
         $(this).text(parseFloat(func).toFixed(size));
      }
   });
});


$(document).ready(function () {



   // header-toggle-content

   $(".toggle-btn").click(function () {
      $(".floating-nav").slideDown(500)
   })
   $(".mobile-nav-close").click(function () {
      $(".floating-nav").slideUp(300)
   })




   //hero-slider
   $('.hero-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
   });


   // product-slider
   $('.product-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });

   // featured-slider
   $('.featured-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
         {
            breakpoint: 1000,
            settings: {
               arrows: true,
               centerPadding: '40px',
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 600,
            settings: {
               arrows: false,
               centerPadding: '40px',
               slidesToShow: 1,
               autoplay: true,
               slidesToScroll: 1
            }
         }
      ]
   });

   //Creator-page-slider
   $('.creator-filter-slider').slick({ //stop
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
         {
            breakpoint: 1000,
            settings: {
               arrows: true,
               centerPadding: '40px',
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 600,
            settings: {
               arrows: false,
               centerPadding: '40px',
               slidesToShow: 1,
               autoplay: true,
               slidesToScroll: 1
            }
         }
      ]
   });

   //filter-active & unactive

   // featured-filter
   $('.featured-filter').click(function () {
      $('.featured').show()
      $('.popular, .new, .surreal, .abstract, .illustration').hide()
      $(this).css("color", "#FFAD0D");
      $('.popular-filter, .new-filter, .surreal-filter, .abstract-filter, .illustration-filter').css("color", "");
      
   });
   //hover-eff
   // $(".popular-filter, .new-filter, .surreal-filter, .abstract-filter, .illustration-filter").hover(
   //    function () {
   //       // This function is called when the mouse enters the element
   //       $(this).css("color", "blue");
   //    },
   //    function () {
   //       // This function is called when the mouse leaves the element
   //       $(this).css("color", ""); // Reset background color
   //    }
   // );

   // popular-filter
   $('.popular-filter').click(function () {
      $('.popular').show()
      $('.featured, .new, .surreal, .abstract, .illustration').hide()
      $(this).css("color", "#FFAD0D");
      $('.featured-filter, .new-filter, .surreal-filter, .abstract-filter, .illustration-filter').css({
         "color": "#fff"
      });

   })

   // new-filter
   $('.new-filter').click(function () {
      $('.new').show()
      $('.featured, .popular, .surreal, .abstract, .illustration').hide()
      $(this).css("color", "#FFAD0D");
      $('.featured-filter, .popular-filter, .surreal-filter, .abstract-filter, .illustration-filter').css({
         "color": ""
      });

   })

   // surreal-filter
   $('.surreal-filter').click(function () {
      $('.surreal').show()
      $('.featured, .popular, .new, .abstract, .illustration').hide()
      $(this).css("color", "#FFAD0D");
      $('.featured-filter, .popular-filter, .new-filter, .abstract-filter, .illustration-filter').css({
         "color": ""
      });

   })

   // abstract-filter
   $('.abstract-filter').click(function () {
      $('.abstract').show()
      $('.featured, .popular, .new, .surreal, .illustration').hide()
      $(this).css("color", "#FFAD0D");
      $('.featured-filter, .popular-filter, .new-filter, .surreal-filter, .illustration-filter').css({
         "color": ""
      });

   })
   // illustration-filter
   $('.illustration-filter').click(function () {
      $('.illustration').show()
      $('.featured, .popular, .new, .surreal, .abstract').hide()
      $(this).css("color", "#FFAD0D");
      $('.featured-filter, .popular-filter, .new-filter, .surreal-filter, .abstract-filter').css({
         "color": ""
      });

   })
});


//count-down

function makeTimer() {

   let endTime = new Date("29 April 2025 9:56:00 GMT+06:00");
   endTime = (Date.parse(endTime) / 1000);

   let now = new Date();
   now = (Date.parse(now) / 1000);

   let timeLeft = endTime - now;

   let days = Math.floor(timeLeft / 86400);
   let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
   let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
   let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

   if (hours < "10") { hours = "0" + hours; }
   if (minutes < "10") { minutes = "0" + minutes; }
   if (seconds < "10") { seconds = "0" + seconds; }

   $(".days").html(days);
   $(".hours").html(hours);
   $(".minutes").html(minutes);
   $(".seconds").html(seconds);

}

setInterval(function () { makeTimer(); }, 1000);