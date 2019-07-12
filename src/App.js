import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams'

const App = () => {
  return (

    <SearchParams />
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
