import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import npm from "npm-demo-pkg";

ReactDOM.render(<App />, document.getElementById('root'));

exports.printMsg = function() {
    console.log("exporting");
  }