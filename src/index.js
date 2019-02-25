import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';
import App2 from './App2';
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import { client } from './clients'

hydrate(
<ApolloProvider client={client}>
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
</ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


