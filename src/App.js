import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import Details from './Details';
import Pet from './Pet';
import SearchParams from './SearchParams'

const App = () => {
  return (

    <Router>
      <SearchParams path="/" />
      <Details path="/details/:id" />
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
