const Cinema = function (films) {
  this.films = films;
};




// should be able to get a list of film titles
Cinema.prototype.filmTitles = function () {
  const filmTitles = this.films.map((filmTitle) => {
    return filmTitle.title;
  });

  return filmTitles;
}




// should be able to find a film by title

Cinema.prototype.findTitle = function(title) {
  const result = this.films.filter(function (currentFilm) {
    return (currentFilm.title == title);
  });
  return result;
}

// should be able to filter films by genre
Cinema.prototype.findGenre = function (genre) {
  const result = this.films.filter(function (currentFilm){
    return (currentFilm.genre == genre);
  });
  return result;
}

// should be able to check whether there are some films from a particular year (true/false)
Cinema.prototype.filmsOfYear = function(year) {
const  result = this.films.filter(function (currentFilm){
    return currentFilm.year == year;
  })
  if (result.length > 0){
    return true;
  } else {return false;}
  
}
// should be able to check whether all films are over a particular length (true/false)


// should be able to calculate total running time of all films

module.exports = Cinema;
