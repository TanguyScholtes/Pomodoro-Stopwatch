const React = require( 'react' );

class Modal extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="modal">
                    <p>Time's up ! Take a break : leave your seat and go get some fresh air.</p>
                    <div className="modal-interface">
                        <button onClick={ () => this.props.reset() }>Restart</button>
                        <button onClick={ () => this.props.dismiss() }>Dismiss</button>
                    </div>
                    <div className="modal-interface">
                        <p>In a hurry ? <a href="" onClick={ ( event ) => this.props.break( event, 10 ) } >Take a deep breath and start again in 10 seconds.</a></p>
                        <p>Want to take a short break ? <a href="" onClick={ ( event ) => this.props.break( event, 300 ) } >Click here to start a new timer in 5 minutes.</a></p>
                        <p>A longer break in sight ? <a href="" onClick={ ( event ) => this.props.break( event, 1800 ) } >Click here to start a new timer in 30 minutes.</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
