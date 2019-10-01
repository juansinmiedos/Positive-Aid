import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
