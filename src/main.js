$('document').ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var movieTitle = $('#movieSearch').val();
    findMovieWithTitle(movieTitle);
  })

  function findMovieWithTitle(movie) {
    $.ajax {
      url: 'http://www.omdbapi.com/?t=' + movie;
    }
    .done(function(movie) {
      console.log(movie);
    })
  }
})
