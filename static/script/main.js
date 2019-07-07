    $(document).ready(function() {
      $('.bg-purple').click(function() {
        $('.bg-purple').hide();
      });
      
      $('.bg-green').click(function() {
        $('.bg-green').hide();
        $('.bg-blue').hide();
      });
      
      $('.p2-border').click(function() {
        $('.p2-border').hide();
      });
      
      $('.gradient').hover(
        function() {
        $('#gradient-circle').hide();
      },
        function() {
        $('#gradient-circle').show();
      });
      
      $('.reset').click(function() {
        $('.p2-circle').show();
      });
    });