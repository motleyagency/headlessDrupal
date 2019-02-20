import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from 'apollo-link-http'; 
import { InMemoryCache } from "apollo-cache-inmemory";
import { errorLink, queryLink } from './links';


const clientQueryLink = new HttpLink({
  uri: 'http://localhost:7025/graphql',
  credentials: 'same-origin',
})

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, clientQueryLink ]),
  connectToDevTools: true,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});
