const chae = {
  name: "chae",
  age: 20,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => chae
  }
};

export default resolvers;
