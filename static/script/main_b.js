    $(document).ready(function() {
      
      $('.stop-btn').click(function() {
        $('.stop-btn').addClass('stop');
        console.log("csss");
      });
      
      var insertBubble = function() {
        $('.shape-container').append('<div class="p2-circle bg-purple"></div>');
        var id = setTimeout(insertBubble, 1000);
        
        if ($('.stop-btn').hasClass('stop')) {
            clearTimeout(id);
        }
      }
      
      insertBubble();

    });


      
