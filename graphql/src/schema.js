const { gql } = require("apollo-server");

const typeDefs = gql`
  type Ad {
    id: Int!
    type: String!
    images: [Image]!
    description: String
    score: Int
    size: Int
    height: Int
    km: Int
    color: String
    fabricant: String
  }
  
  type Image {
    id: Int!
    url: String!
    quality: String!
  }
  
  type Query {
    ads(minScore: Int!): [Ad!]!
    ad(id: Int!): Ad
  }
`;

module.exports = typeDefs;