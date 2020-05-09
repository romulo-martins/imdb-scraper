# IMDB Scraper
A scraper for the IMDB website, to extract information of movies and tv series

## Install

To install the project dependencies you can run the following command
```Javascript
npm install
```

## Usage

To get a unique tile by the imdb id
```Javascript
const getMovie = require('./lib/getMovie')

getMovie('tt0059968')
```

Output from getMovie
```Javascript
{
  title: 'Batman e Robin',
  originalTile: 'Batman',
  description: 'The Caped Crusader and his young ward battle evildoers in Gotham City.',
  rating: '7.5/10',
  year: 'Not found',
  poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNDY5NTg5MF5BMl5BanBnXkFtZTgwNzI4NzM1MjE@._V1_UY268_CR13,0,182,268_AL_.jpg',
  imdbId: 'tt0059968'
}
```

To search all star wars movies
```Javascript
const { searchMovies } = require('./lib/searchTitle');

searchMovies('star wars')
```
Example of output from search all star wars movies
```Javascript
{
  title: 'Star Wars, Episódio II: Ataque dos Clones',
  originalTile: 'Star Wars: Episode II - Attack of the Clones',
  description: 'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.',
  rating: '6.5/10',
  year: '(2002)',
  poster: 'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg',
  imdbId: 'tt0121765'
},
{
  title: 'Untitled Star Wars Trilogy: Episode III',
  originalTile: 'Not Found',
  description: 'Plot unknown.',
  rating: 'Not found',
  year: 'Not found',
  poster: 'Not found',
  imdbId: 'tt7618100'
},
...
```


