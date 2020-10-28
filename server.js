const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { mongoDB } = require("./config");

const resolvers = require("./src/graphql/resolvers/");
const typeDefs = require("./src/graphql/typeDefs");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

// CONNECTED TO DB AND RUN SERVER
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB CONNECTED");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`SERVER: ${res.url}`);
  });
