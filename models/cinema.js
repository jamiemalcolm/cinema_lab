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
Cinema.prototype.maxLength = function(length) {
  const  result = this.films.filter(function (currentFilm){
      return (currentFilm.length == length);
    })
    if (result.length > 0){
      return true;
    } else {return false;}
    
  }

// should be able to calculate total running time of all films
Cinema.prototype.totalLength = function (){
  const filmLengths = this.films.map(function (film){
    return film.length;
  });
  total = filmLengths.reduce(function(runningTotal, length){
    return runningTotal + length;
  });
  return total;
}
module.exports = Cinema;
