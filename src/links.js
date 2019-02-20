import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http'; 

export const errorLink = onError(({ graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, location, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`)
    })
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
})

export const queryLink = new HttpLink({
  uri: 'http://drupal/graphql',
  credentials: 'same-origin',
});
