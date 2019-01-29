const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
import '../scss/styles.scss';

import App from './components/App.js';
import Branding from './components/Branding.js';

ReactDOM.render(
    <Branding />,
    document.getElementById('brand')
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
