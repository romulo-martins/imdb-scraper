const { removeDuplicates } = require('./helper');
const axios = require('axios');
const cheerio = require('cheerio');
const baseUrl = 'https://www.imdb.com';

const getMovie = require('./getMovie');

function _getMovieIds(data) {
    const $ = cheerio.load(data);
    const movieIDs =
        Array.from($('table tbody tr a'))
            .map(a => a.attribs.href)
            .map(a => a.split('/')[2])
    return removeDuplicates(movieIDs);
}

// Os seguintes filtros basta incluir o parametro informado:
// All Titles - &ttype=tt
// TV Series  - &ttype=tv
// Movies     - &ttype=ft
function searchTitles(name, filter = '') {
    const url = `${baseUrl}/find?q=${name}&s=tt${filter}`
    axios.get(url)
        .then(function (response) {
            const movieIds = _getMovieIds(response.data)
            movieIds.map(movieId => getMovie(movieId))
            // console.log(movieIds);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function searchMovies(name) {
    return searchTitles(name, '&ttype=ft');
}

function searchSeries(name) {
    return searchTitles(name, '&ttype=tv');
}

module.exports = { searchMovies, searchSeries, searchTitles }
