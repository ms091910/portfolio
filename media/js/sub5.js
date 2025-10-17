$(document).ready(function () {
  $(".masonry li").hover(
    function () {
      $(this).siblings().css({ filter: "brightness(60%)" });
    },
    function () {
      $(this).siblings().css({ filter: "brightness(100%)" });
    }
  );
});