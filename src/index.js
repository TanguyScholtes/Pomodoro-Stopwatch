const React = require( 'react' );
const ReactDOM = require( 'react-dom' );

import App from './components/App.js';
import Branding from './components/Branding.js';
import Footer from './components/Footer.js';

ReactDOM.render(
    <Branding />,
    document.getElementById('brand')
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);
