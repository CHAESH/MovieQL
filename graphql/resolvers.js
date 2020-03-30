import { getMovies, getById, addMovie, deletedMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deletedMovie: (_, { id }) => deletedMovie(id)
  }
};

export default resolvers;
