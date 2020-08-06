const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const AdAPI = require("./datasources/ad");
const ImagesAPI = require("./datasources/images");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    adAPI: new AdAPI(),
    imagesAPI: new ImagesAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${ url }`);
});