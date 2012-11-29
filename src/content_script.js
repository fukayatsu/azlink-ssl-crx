var linkCode;

setInterval(function() {
  var updateCode = $('#linkCode').val();
  if (linkCode != updateCode) {
    linkCode = updateCode.replace(
      /http:\/\/ecx.images-amazon.com\/images\//g,
      'https://images-na.ssl-images-amazon.com/images/');

    $('#linkCode').val(linkCode);
  }
}, 1000);
