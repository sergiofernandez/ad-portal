import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});
