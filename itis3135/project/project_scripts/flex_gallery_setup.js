$(document).ready(function () {
  let media = $.getJSON('media.json', (media) => {
    $('#container').addFlexImages(media, true).flexGallery({
      margin: '1vmin',
      minHeightRatioWindow: 0.50,
      fadeInDuration: 2000,
      checkPeriod: 1000,
      autoAdjust: true
    });
  });
});