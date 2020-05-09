const { removeDuplicates } = require('./helper');
const axios = require('axios');
const cheerio = require('cheerio');
const baseUrl = 'https://www.imdb.com';

function _getTitle($) {
    return $('.title_wrapper h1').text().trim();
}

function _getOriginalTitle($) {
    return $('.originalTitle').text().replace('(original title)', '').trim();
}

function _getDescription($) {
    return $('.summary_text').text().trim();
}

function _getRating($) {
    return $('.ratingValue span').text().trim();
}

function _getYear($) {
    return $('#titleYear').text();
}

function _getPoster($) {
    return $('.poster img').attr('src');
}

function _getGenres($) {
    const genres =
        Array.from($('a[href*=genres]'))
            .map(a => a.firstChild.data.trim());
    return removeDuplicates(genres);
}

function _extractData(data) {
    const $ = cheerio.load(data);
    return ({
        title: _getTitle($),
        originalTile: _getOriginalTitle($),
        description: _getDescription($),
        rating: _getRating($),
        year: _getYear($),
        poster: _getPoster($),
        genres: _getGenres($)
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
