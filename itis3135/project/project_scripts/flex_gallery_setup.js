media = {
  images: ['../project_images/gallery1.jpg', '../project_images/gallery2.jpg', '../project_images/gallery3.jpg', '../project_images/gallery4.jpg'],
  links: ['../project_images/gallery1.jpg', '../project_images/gallery2.jpg', '../project_images/gallery3.jpg', '../project_images/gallery4.jpg']
}

// * @param {Array} imgs - the image list to be displayed
// * @param {Boolean} shuffling - whether to shuffle the image list or not
$('#flex_gallery').addFlexImages(media, true)

$('#flex_gallery').addFlexImages(media, true).flexGallery({
  margin: '0.5vmin',
  minHeightRatioWindow: null,
  minHeightRatioScreen: null,
  fadeInDuration: 1000,
  checkPeriod: 100,
  autoAdjust: true
});