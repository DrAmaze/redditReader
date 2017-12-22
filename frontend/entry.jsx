import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const rootDiv = document.getElementById("root");
  ReactDOM.render(<Root />, rootDiv);
});
