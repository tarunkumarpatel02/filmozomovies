import React from 'react';
import ReactDOM from 'react-dom';
//  import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.js";
// import "../node_modules/bootstrap/js/dist/tab.js";
import './index.css';
import App from '../src/container/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
<ParallaxProvider >
  <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
  </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
