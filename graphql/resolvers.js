import { getMovies, getById, addMovie, deletedMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating)
  }
};

export default resolvers;
