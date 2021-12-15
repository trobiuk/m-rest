$(function () {
  $(".header__btn-menu").on("click", function () {
    $(".header__menu-wrap").animate(
      {
        right: "0px",
      },
      300
    );

    $(".wrapper").animate(
      {
        right: "60px",
      },
      300
    );

    $(".body_overlay").fadeIn(300);
  });

  $(".header__btn-close-menu, .body_overlay").on("click", function () {
    $(".header__menu-wrap").animate(
      {
        right: "-270px",
      },
      300
    );

    $(".wrapper").animate(
      {
        right: "0",
      },
      300
    );

    $(".body_overlay").fadeOut(300);
  });

  $(window).on("load resize", function () {
    const dropDownBtn = $(".drop-down > .drop-down__btn");
    dropDownBtn.off("click");
    if ($(window).width() <= "1240") {
      $(".drop-down__list").css("display", "none");
      dropDownBtn.on("click", function () {
        $(this).next(".drop-down__list").slideToggle(300);
        $(this).toggleClass("active");
      });
    } else {
      if ($(".header__menu-wrap").css("right") == "0px") {
        $(".header__btn-close-menu").trigger("click");
      }
      if (dropDownBtn.hasClass("active")) {
        dropDownBtn.removeClass("active");
      }
    }
  });
});
