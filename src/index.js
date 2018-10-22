import './styles/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Store from './Store/Store'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = <Provider store = {Store}>
                <BrowserRouter basename={'/stf/cheliub/test'}>
                    <App />
                </BrowserRouter>
            </Provider>

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
