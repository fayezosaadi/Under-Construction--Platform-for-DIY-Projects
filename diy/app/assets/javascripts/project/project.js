$(document).ready(function onReady() {

  var $modalTrigger = $(".modal-trigger");
  var $overlayLayer = $(".overlay-layer");
  var $modal = $(".modal");
  var $backgroundLayer = $(".background-layer");

  function toggleModal() {
    $modal.addClass('open');
    $overlayLayer.addClass('open');
    $backgroundLayer.addClass('blur');
  }

  $modalTrigger.on('click', toggleModal);
  $overlayLayer.on('click', function(){
    $overlayLayer.removeClass('open');
    $modal.removeClass('open');
    $backgroundLayer.removeClass('blur');
  });

});