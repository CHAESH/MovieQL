export let movies = [
  {
    id: 0,
    name: "Start wars",
    score: 1
  },
  {
    id: 1,
    name: "abs",
    score: 4
  },
  {
    id: 2,
    name: "efjwi",
    score: 3
  },
  {
    id: 4,
    name: "fuck wars",
    score: 5
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const deletedMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
