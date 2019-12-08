import WebFont from 'webfontloader';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
WebFont.load({
    google: {
      families: ['Special Elite','Ubuntu','Roboto']
    }
  });

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

