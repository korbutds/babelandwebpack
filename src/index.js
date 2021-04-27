import React from 'react';
import ReactDom from 'react-dom';
import css from './main.css';

console.log(css.toString())

const App = () => <p>Hello World</p>;
ReactDom.render(<App/>, document.getElementById(`root`))