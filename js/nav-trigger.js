$(document).ready(function() {

  $("#nav-trigger").click(function() {
    $(".mobile-navigation").find("li:not(.li-active)").find("ul").hide(1);
    $(".mobile-navigation").toggleClass("nav-active");
  });
  $('#search-toggle').click(function () {
    var input = $('#search-box');
    input.toggleClass('expanded');
  });
  $('.mobile-navigation a').click(function () {
    console.log(this);
    $(this).parent().parent().find("ul").hide(200);
    $(this).parent().find("ul").show(200);

  });

// ObjectFit Fallback
if ('objectFit' in document.documentElement.style === false) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
            (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

            image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
        });
    });
}
});
