const React = require( 'react' );

class Modal extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="modal">
                    <p>Time's up ! Take a break !</p>
                    <div className="modal-interface">
                        <button onClick={ this.props.reset }>Restart</button>
                        <button onClick={ this.props.dismiss }>Dismiss</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
