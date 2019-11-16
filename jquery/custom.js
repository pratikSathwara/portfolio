          function openNav() {
            document.getElementById("myNav").style.height = "100%";
          }

          function closeNav() {
            document.getElementById("myNav").style.height = "0%";
          }

          $('.menu li a').click(function() {
            $('#myNav').css("height","0%");
          });

        $(document).ready(function() {
        $(".tab").click(function () {
            $(".menu li").removeClass("active");
            $(this).addClass("active");   
        });
        });

<<<<<<< HEAD
        $(window).scroll(function(){
           if($(this).scrollTop()>80){
              $('.navbar').addClass("sticky");
              $('.navbar').css({"background-color":"#41228e", "transition":"1s all"});
              // $('.header_content').css({"margin-top":"80px", "transition":"1s all"});
           }
           else{
               $('.navbar').removeClass("sticky");
               $('.navbar').css({"transition":"1s all"});
               // $('.header_content').css({"margin-top":"0px", "transition":"2s all"});
           }
        });

=======
>>>>>>> 7c03d59fd2d573b2afe34e6acbe7676f8ea3f3bd
         $('.circlechart').circlechart();
         

         // When the user clicks on the button, scroll to the top of the document
         $(document).ready(function() {
             $("#scroll_btn").click(function(event) {
                 event.preventDefault();
                 $("html, body").animate({ scrollTop: 0 }, "slow");
                 return false;
             });

         });         


<<<<<<< HEAD
        //  AOS.init();
        //  AOS.init({
        //   duration: 1500,
        //   easing: 'linear',
        // });
        //  AOS.init({disable: 'mobile'});
         

=======
         AOS.init();
         AOS.init({
          duration: 1500,
          easing: 'linear',
        });
         AOS.init({disable: 'mobile'});
         
        $(document).ready(function(){ 
         $('.owl-one').owlCarousel({
             
             loop:true,
             nav:true,
             dots: false,
             items:1,
             margin:30,
             stagePadding:30,
             smartSpeed:450
         });
         });
      
>>>>>>> 7c03d59fd2d573b2afe34e6acbe7676f8ea3f3bd
