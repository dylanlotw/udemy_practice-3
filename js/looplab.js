      //Get the currtent year for the copyright
      $("#year").text(new Date().getFullYear());

      //init Scrollspy
      $('body').scrollspy({target:'#main-nav'});

      //add smoth scorlling
        $('#main-nav a').on('click', function(event){
        if(this.hash !==''){
          event.preventDefault();

          const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function(){
        //ass hash to URL after scroll
        window.location.hash = hash;
      });
    }
    });