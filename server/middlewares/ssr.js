import fs from 'fs'
import util from 'util';
import path from 'path';
import 'isomorphic-fetch';
import React from 'react';
import { StaticRouter } from 'react-router';

import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ReactDOMServer from 'react-dom/server';
import { errorLink } from '../../src/links'


import App2 from '../../src/App2'

const readFile = util.promisify(fs.readFile);

const ssr = (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([errorLink, new HttpLink({
      uri: 'http://drupal/graphql',
      credentials: 'same-origin',
      headers: {
        cookie: req.header('Cookie')
      }
    })]),
    cache: new InMemoryCache()
  })

  const context = {};

  const Root = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App2 />
      </StaticRouter>
    </ApolloProvider>
  );

  const getData = async () => {
    return await readFile(path.resolve('./build/index.html'), 'utf8')
  }

  getData().then(data => {
    renderToStringWithData(Root)
      .then(content => {
        console.log('hui1')
        // ReactDOMServer.renderToString(Root);
        const initialState = client.extract();
        // const html = <Html content={content} client={client} />;


        res.send(
          data
            .replace(
              '<div id="root"></div>',
              // '<div id="root">hui</div>',
              `<div id="root">${content}</div>`
            )
            .replace(
              /__APOLLO_STATE__\s*=\s*{}/,
              `__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(
                /</g,
                '\\u003c'
              )}`
            )
        );
        res.end();
      })
      .catch(e => {
        console.error('ERROR WHILE RENDERING:', e);

        res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">An error occured. Error stack:\n\n${e.stack}</div>`
          )
        )

      })
  })
    .catch(err => console.log('Error: ', err));

};

export default ssr;
