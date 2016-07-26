$('document').ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var movieTitle = $('#movieSearch').val().split(' ').join('+');
    findMovieWithTitle(movieTitle);
  });

  function findMovieWithTitle(movie) {
    $.ajax ({
      url: 'http://www.omdbapi.com/?t=' + movie
    }).done(function(movie) {
      console.log(movie);
    }).catch(function(error) {
      console.log(error);
    });
  }
});
