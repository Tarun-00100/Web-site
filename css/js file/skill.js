$(document).ready(function() {
    var skillBar = $('.skill-body');
    $(window).scroll(function() {
      var SkillLocation = $("#Education-Skill").offset().top;
      var scrollLocation = $(this).scrollTop();
  
      skillBar.each(function() {
        if (SkillLocation <= scrollLocation) {
          $(this).find('.inner-skill-bar').animate({
            width: $(this).attr('data-percent')
          }, 2000);
        }
      });
    });
  });