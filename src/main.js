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
      $('#poster').src(movie.poster);
      $('.well').style('visibility', 'visible');
      var genreArray = movie.genre.split(', ');
      for (genre in genreArray) {
        $('#genres').append('<option name="' + genre + '">' + genre + '</option>')
      }
    }).catch(function(error) {
      console.log(error);
    });
  }
});
