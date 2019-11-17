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

         $('.circlechart').circlechart();
         

         // When the user clicks on the button, scroll to the top of the document
         $(document).ready(function() {
             $("#scroll_btn").click(function(event) {
                 event.preventDefault();
                 $("html, body").animate({ scrollTop: 0 }, "slow");
                 return false;
             });

         });         
         AOS.init({
          duration: 1300,
          once: true,
          easing: 'linear',
          disable: 'mobile',
        });

