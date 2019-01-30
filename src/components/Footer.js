const React = require( 'react' );

class Footer extends React.Component {
    render () {
        return(
            <div className="footer-container">
                <img className="footer-image" src={ require( '../../public/Shopkeeper.png' ) } />
                <p className="footer-text">Made by <a href="http://tanguyscholtes.be">Tanguy Scholtes</a>, 2019</p>
            </div>
        );
    }
}

export default Footer;
