$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() <= 100) {
      $(".topHeader").removeClass("scrolled");
    } else {
      $(".topHeader").addClass("scrolled");
    }
  });
  if ($(window).scrollTop() <= 100) {
    $(".topHeader").removeClass("scrolled");
  } else {
    $(".topHeader").addClass("scrolled");
  }

  $(".button--has-arrow").append(`
    <span class="button--has-arrow-here">
        <i class="ti-arrow-circle-right"></i>
    </span>
  `);

  $(".activeMember__member").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(".activeMember__member").removeClass("active active--lv1 active--lv2");

      $(this).addClass("active");
      $(".activeMember__members").addClass("active");

      var $a = $(this);
      setTimeout(function () {
        $a.addClass("active--lv1");
      }, 300);
      setTimeout(function () {
        $a.addClass("active--lv2");
      }, 350);
    } else {
      $(".activeMember__member").removeClass(
        "active active active--lv1 active--lv2"
      );
      $(".activeMember__members").removeClass("active");
    }
  });
});
