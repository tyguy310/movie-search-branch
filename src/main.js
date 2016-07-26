$('document').ready(function() {
  console.log('Sanity check');
  $('form').on('submit', function(event) {
    event.preventDefault();
    var movieTitle = $('#movieSearch').val().split(' ').join('+');
    findMovieWithTitle(movieTitle);
  });

  function findMovieWithTitle(movie) {
    $.ajax ({
      url: 'http://www.omdbapi.com/?t=' + movie
    }).done(function(movie) {
      $('#poster').append('<img src="' + movie.Poster + '"></img>')
      $('.well').css('visibility', 'visible');
      var genreArray = movie.Genre.split(', ');
      for (i = 0; i < genreArray.length; i++) {
        $('#genres').append('<option>' + genreArray[i] + '</option>')
      }
    }).catch(function(error) {
      console.log(error);
    });
  }
});
