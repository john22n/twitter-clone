  $(document).ready(function() {
    var tweet;
    var name = $('#name').text();

    console.log(tweet);
    $('#tweet-submit, #char-count').hide();


    $('.tweet-compose, #user-text').on('keyup', function() {
      $(this).height(100);
      $('#tweet-submit, #char-count').show();
    });

    $('.tweet-compose').on('keyup', function(event) {
      var len = $(this).val().length;
      var max = 140;

      $('#char-count').text(max - len);
      if (max - len < 10) {
        $('#char-count').css('color', 'red');
      }
      if (max - len > 10) {
        $('#char-count').css('color', 'black');
      }
      if (len > 140) {
        $('#tweet-submit').prop('disabled', true);
      }
      if (len < max) {
        $('#tweet-submit').prop('disabled', false);
      }
    });

    // $(function() {
    $('#tweet-submit').on('click', function() {
      tweet = $('#user-text').val();
      $('#stream').prepend('<div class="tweet">' +
        '<div class="content">' +
        '<img class="avatar" src="img/alagoon.jpg"/>' +
        '<strong class = "fullname">' + name + '</strong><span class = "username"> @John </span>' +
        '<p class = "tweet-text">' + tweet +
        '</p>' + '<div class ="tweet-actions">' +
        '<ul>' +
        '<li> <span class = "icon action-reply"> </span> Reply</li >' +
        '<li> <span class = "icon action-retweet"> </span> Retweet</li >' +
        '<li> <span class = "icon action-favorite"> </span> Favorite</li >' +
        '<li> <span class = "icon action-more"></span> More</li >' +
        '</ul> </div >' +
        '<div class = "stats" >' +
        '<div class = "retweets" >' +
        '<p class="num-retweets"> 30 </p>' +
        '<p>RETWEETS</p></div><div class="favorites">' +
        '<p class="num-favorites"> 6 </p><p>FAVORITES</p>' +
        '</div> <div class="users-interact">' +
        '<div>' +
        '<img src="img/alagoon.jpg" />' +
        '<img src="img/vklimenko.jpg" />' +
        '</div> </div>' +
        '<div class="time">' +
        ': 04 PM - 19 Sep 13 </div> </div><div class="reply" >' +
        '<img class="avatar" src="img/alagoon.jpg" />' +
        '<textarea class="tweet-compose"' +
        'laceholder="Reply to @mybff" /> </textarea></div></div></div> ')

    });

    // });


  })
