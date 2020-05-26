const getMovie = require('../lib/getMovie')

getMovie('tt0096895')
    .then(response => {
        console.log(response)
    })
