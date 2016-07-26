$('document').ready(function() {
  console.log('Sanity check');
  $('form').on('submit', function(event) {
    event.preventDefault();
    var movieTitle = $('#movieSearch').val().split(' ').join('+');
    findMovieWithTitle(movieTitle);
  });

      var allGenres = [];


  $('#poster').on('click', 'div', function (event) {
    event.preventDefault();
    var question = "This will delete this movie from the page. Press ok to continue.";
    if (areYouSure(question)) {
      $(this).remove();
    };
  })

  function findMovieWithTitle(movie) {
    $.ajax ({
      url: 'http://www.omdbapi.com/?t=' + movie
    }).done(function(movie) {
      $('#poster').append('<div class="col-md-3 text-center" style="height:500px"><img src="' + movie.Poster + '"><p>' + movie.Title + '</p>');
      $('.well').css('visibility', 'visible');
      var genreArray = movie.Genre.split(', ');
      for (i = 0; i < genreArray.length; i++) {
          if (allGenres.indexOf(genreArray[i]) === -1) {
            $('#genres').append('<option>' + genreArray[i] + '</option>')
            allGenres.push(genreArray[i]);
          }
        }
    }).catch(function(error) {
      console.log(error);
    });
  }

  function areYouSure(message) {
    var okToConfirm = confirm(message);
    if (okToConfirm) {
      return true;
    }
    return false;
  }
});
