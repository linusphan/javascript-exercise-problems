/*
input
  array of objects

return
  array of objects with id and title only

rules
  - id is integer greater than 0 <- assumption
  - keep only the id and title for each release

algorithm
  - get films with id and title -> selection / filter
  - return those films with just id and title details -> map
*/

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function processReleaseDate(data) {
  function validId(id) {
    return typeof id === 'number' &&
      !Number.isNaN(id) &&
      id > 0 &&
      id % 1 === 0;
  }

  var movies = data.filter(function (datum) {
    return validId(datum.id) && datum.title;
  });

  return movies.map(function (movie) {
    return {
      id: movie.id,
      title: movie.title,
    }
  });
}

console.log(processReleaseDate(newReleases));
