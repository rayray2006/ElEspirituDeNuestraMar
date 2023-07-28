jQuery(document).ready(function () {
    // The default language is English
         var lang = "en";
         jQuery(".lang").each(function (index, element) {
            jQuery(this).text(arrLang[lang][jQuery(this).attr("key")]);
                    jQuery("#en").css("color", "#e78533");
         });
         
         function sizeCheck()
         {
          let windowSize = jQuery(window ).width();
          jQuery(window).scrollTop() >= 100
             ? (jQuery(".fixed-nav-bar").addClass("scrolled"),
               jQuery(".the-bass").addClass("scrolled"),
               jQuery("#top").css("opacity", "1"),
               windowSize < 767 ? 
               (jQuery("#logo").attr("src", "static/assets/logo-s-dark.png")) :
               jQuery("#logo").attr("src", "static/assets/logo-teal.png"))
             : (jQuery(".fixed-nav-bar").removeClass("scrolled"),          
               jQuery(".the-bass").removeClass("scrolled"),
               jQuery("#top").css("opacity", "0"),
               windowSize < 767 ? 
               jQuery("#logo").attr("src", "static/assets/logo-s-white.png") :
               jQuery("#logo").attr("src", "static/assets/logo-white.png"));
         }
         sizeCheck();
         jQuery(window).scroll(function () {
              sizeCheck();
          });
          jQuery(window).on("resize", function () {
               let windowSize = jQuery(window ).width();
               sizeCheck();
               windowSize < 767 ? jQuery("#hero-video").attr("src", "static/assets/hero-image-s.mp4")
               : jQuery("#hero-video").attr("src", "static/assets/hero-image.mp4");
           }).resize();

          jQuery("#menuButton").on("change", function () {
              jQuery("#menuButton").is(":checked")
                  ? jQuery(".the-bass").addClass("dropped")
                  : jQuery(".the-bass").removeClass("dropped");
          });
          jQuery('.timeline-Header').css('display', 'none');

          jQuery( ".drop-down-item" ).click(function() { 
               jQuery(".the-bass").removeClass("dropped");
               jQuery("#menuButton").prop( "checked", false );
          })
    });
    
     // get/set the selected language
     jQuery(".translate").click(function () {
          console.log("click");
          var lang = jQuery(this).attr("id");
          if (lang=="es") {
               jQuery("#en").css("color", "unset");
               jQuery("#es").css("color", "#e78533");
               jQuery(".pdfLink").attr("href" , "static/assets/pdf/map-es.pdf");
          } else {
               jQuery("#en").css("color", "#e78533");
               jQuery("#es").css("color", "unset");
               jQuery(".pdfLink").attr("href" , "static/assets/pdf/map-en.pdf");
          }         
          jQuery(".lang").each(function (index, element) {
               jQuery(this).text(arrLang[lang][jQuery(this).attr("key")]);
          });

     });
     // Modal Window for Youtuwbe videos
     jQuery( ".trigger" ).click(function(e) {
          jQuery(".modal").css("display", "block");              
          jQuery("#yt-video").attr("src", jQuery(this).attr("data-youtube"));
          if (this.id=="experts") {
               jQuery(".video-container").css("display", "block");   
          } else {
               jQuery(".terms-container").css("opacity", "1"); 
          }
     });
     
     jQuery( ".close" ).click(function() {     
          jQuery(".modal").css("display", "none");
          jQuery("body").css("overflow", "unset");  
          jQuery(".video-container").css("display", "none");   
          jQuery("#yt-video").attr("src", "-");
          jQuery(".terms-container").css("opacity", "0"); 
     });

