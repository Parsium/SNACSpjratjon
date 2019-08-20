import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import data from "./snacks.json";
import * as serviceWorker from "./serviceWorker";
import { InMemoryCache } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { gql } from "apollo-boost";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: "http://localhost:4000/"
});

const client = new ApolloClient({
    cache,
    link,
});

client.query({
    query: gql`
    query {
        snack {
          id
          name
          description
          nutrition {
            sugar
            calories
          }
          dietary {
            vegetarian
            vegan
            nutFree
            glutenFree
          }
        }
      }
    `
  }).then(result => console.log(result));

ReactDOM.render(<App data={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
