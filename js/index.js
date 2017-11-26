$(document).ready(function(){
  getQuote();
  });

$(document).ready(function(){
  $('#newQuote').on('click', function(){
  getQuote();
  });
  });

var getQuote = function() {  
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    type: 'POST',
    dataType: 'json',
    success: function(data) {
      $('#quote-text').html(("'" + data.quote + "'"));              $("#author-text").html((data.author)),
$(".twitter-share-button").attr("href", ('https://twitter.com/intent/tweet?text=' + data.quote + ' - ' + data.author)) },
    
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "QEZRwdm6Nzmsh09Z5nBKr37eOOTzp1qVkWijsn60JhXXorsbrh"); 
    }
});
};