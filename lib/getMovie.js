const axios = require('axios');
const cheerio = require('cheerio');
const baseUrl = 'https://www.imdb.com';

function _extractData(data) {
    const $ = cheerio.load(data);
    const title = $('.title_wrapper h1').text().trim()     || 'Not found';
    const originalTile = $('.originalTitle').text().trim() || 'Not Found';
    const description = $('.summary_text').text().trim()   || 'Not found';
    const rating = $('.ratingValue span').text().trim()    || 'Not found';
    const year = $('.title_wrapper #titleYear').text()     || 'Not found';
    const poster = $('.poster img').attr('src')            || 'Not found';

    return ({
        title: title.replace(year, '').trim(),
        originalTile: originalTile.replace('(original title)', '').trim(),
        description: description,
        rating: rating,
        year: year,
        poster: poster
    })
}

function getMovie(movieId) {
    const url = `${baseUrl}/title/${movieId}`;
    axios.get(url)
        .then(function (response) {
            const movie = _extractData(response.data);
            movie.imdbId = movieId;
            console.log(movie);
        })
        .catch(function (error) {
            console.error(error);
        });
}

module.exports = getMovie
