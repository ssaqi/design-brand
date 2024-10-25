///////////////*****//////////////////
// RESPONSIVE NAVIGATION
// OPEN BTN
  $(document).ready(function () {
    $("#navbar").on("click", function() {
      $(".nveMenu").addClass("is-opened");
      $(".overlay").addClass("is-on");
    });

    $(".overlay").on("click", function() {
      $(this).removeClass("is-on");
      $(".nveMenu").removeClass("is-opened");
    });
  });
// CLOSE BTN
  $(".overlay").on("click", function() {
    $(this).removeClass("is-on");
    $(".nveMenu").removeClass("is-opened");
  });

  $(".close-btn-nav").click(function(){
  $(".nveMenu").removeClass("is-opened");
  $(".overlay").removeClass("is-on");
  });
  // RESPONSIVE NAVIGATION
  // 
  // ACTIVE JS START
  jQuery(function($) {
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.menu ul li a').each(function() {
      if (this.href === path) {
        $(this).addClass('active');
      }
    });
  });
  // ACTIVE JS END
  // 
  // PRELOADER START
$(document).ready(function() {
  setTimeout(function() {
  $('.preloader').fadeOut('slow');
            }, 2000);
});
  // PRELOADER END
///////////////*****//////////////////


/*exceptional tabs*/
$(document).ready(function () {
  var pTabItem = $(".prodNav .ptItem");
  $(pTabItem).click(function () {
    // Tab nav active functionality
    $(pTabItem).removeClass("active");
    $(this).addClass("active");

    // Tab container active functionality
    var tabid = $(this).attr("id");
    $(".prodMain").removeClass("active");
    $("#" + tabid + "C").addClass("active");

    return false;
  });
});

/*packages-tab*/

/*tabs*/
// let packagestabs = document.querySelectorAll('.packagestab');
//         let packagescontent = document.querySelectorAll('.packagescontent-item');
//         for (let i = 0; i < packagestabs.length; i++) {            
//           packagestabs[i].addEventListener('click', () => tabClick(i));
//         }

//         function tabClick(currentTab) {
//             removeActive();
//             packagestabs[currentTab].classList.add('active');
//             packagescontent[currentTab].classList.add('active');
//             console.log(currentTab);
//         }

//         function removeActive() {
//             for (let i = 0; i < packagestabs.length; i++) {
//               packagestabs[i].classList.remove('active');
//               packagescontent[i].classList.remove('active');
//             }
//         }


        /*packages slider query*/
        $('.package-boxes-slder .owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          animateOut: 'fadeOut',
          autoplayHoverPause: false,
          autoplayTimeout: 9000,
          autoplay: true,
          pagination: false,
          dots: false,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 3
              }
          }
      });
      

      /*portfolio tabs*/
      let portfoliotabs = document.querySelectorAll('.portfoliotab');
        let portfoliocontent = document.querySelectorAll('.portfoliocontent-item');
        for (let i = 0; i < portfoliotabs.length; i++) {            
          portfoliotabs[i].addEventListener('click', () => tabClick(i));
        }

        function tabClick(currentTab) {
            removeActive();
            portfoliotabs[currentTab].classList.add('active');
            portfoliocontent[currentTab].classList.add('active');
            console.log(currentTab);
        }

        function removeActive() {
            for (let i = 0; i < portfoliotabs.length; i++) {
              portfoliotabs[i].classList.remove('active');
              portfoliocontent[i].classList.remove('active');
            }
        }

/*testimonials*/
$('.client-feedback-testiminails .owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  animateOut: 'fadeOut',
  autoplayHoverPause: false,
  autoplayTimeout: 9000,
  autoplay: true,
  pagination: false,
  dots: false,
  nav: false,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 3
      }
  }
});


$(".clickbutton").click(function() {
  $('.floatbutton').toggleClass("active");
//   $('.crossplus').toggleClass("rotate");
});
// FLOATING FORM ENDS




/* go top*/
var btn = $('#go-top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '1000');
});


     function setButtonURL() {
$zopim.livechat.window.toggle();
}
  
  
   $(window).on('load', function() {
        // $('#exampleModal').modal('show');
    });
    
    
    
    
    // Logo Brief Js
$(".logo-sel-pic").click(function () {
  (dis = $(this)), (logotypeget = dis.data("logotype")), (sbl = dis.parents("li").siblings().find(".logo-sel-pic")), dis.addClass("white_select"), sbl.removeClass("white_select"), $("#logotypeget").val(logotypeget);
}),
$(".logofont").click(function () {
  (dis = $(this)), (logofonttyp = dis.data("logofont")), (sbl = dis.parents("li").siblings().find(".logofont")), dis.addClass("gt_logofnt"), sbl.removeClass("gt_logofnt"), $("#logofonttyp").val(logofonttyp);
}),
$(".logoclr").click(function () {
  (dis = $(this)), (logoclrslect = dis.data("logoclr")), (sbl = dis.parents("li").siblings().find(".logoclr")), dis.addClass("white_select"), sbl.removeClass("white_select"), $("#logoclrslect").val(logoclrslect);
}),
document.addEventListener("touchstart", onTouchStart, { passive: !0 });
