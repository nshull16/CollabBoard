function downloadImage()
{
  var canvasDownload = document.getElementById('canvas');
  var dataUrl = canvasDownload.toDataURL('image/jpeg');
  console.log(dataUrl);
}
