import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = new createHttpLink({
  uri: "https://beta.zaamo.co/graphql/",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
