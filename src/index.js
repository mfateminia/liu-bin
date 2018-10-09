import './styles/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter basename={'/stf/cheliub'}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
