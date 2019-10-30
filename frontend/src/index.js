import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './Router';
import Provider from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider>
        <Router />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
