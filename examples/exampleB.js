const { searchMovies } = require('../lib/searchTitle');

searchMovies('star wars episode')
    .then(response =>
        console.log(response)
    )
