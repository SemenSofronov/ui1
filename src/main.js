(function($){
    $(function() {
      $('.header__menu__icon').on('click', function() {
        $(this).closest('.header__menu').toggleClass('header__menu_state_open');
      });
    });
  })(jQuery);

  var btnSelect;
  function changeActivity(buttom){
    var btn = $(buttom);
    btn.toggleClass("paused");
  }
