import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  HashRouter
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DrawCanvas from './components/DrawCanvas';
import ImageGrid from './components/ImageGrid';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=":id/edit" element={<DrawCanvas />} />
      <Route path=":id/result" element={<ImageGrid />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
