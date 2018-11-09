var urlKos ='https://en.wikipedia.org/w/api.php?action=opensearch&search=KosciuskoMississippi&format=json&callback=wikiCallback'
$.ajax({
  url:urlKos,
  dataType:'jsonp',
  success: function ( response) {
    console.log(response);
    entireResponse = response[2]
    $('.infoKosCon').html(entireResponse)

  }
})
