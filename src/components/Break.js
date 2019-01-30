const React = require( 'react' );

class Break extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="modal">
                    <p>Enjoy your break. A new timer will automatically start in...</p>
                    <div className="clock">
                        <p className="clock-timer">{ this.props.secondsToTimer( this.props.waitingTime ) }</p>
                    </div>
                    <div className="modal-interface">
                        <button className="modal-button" onClick={ () => this.props.reset() }>End break</button>
                    </div>
                </div>
                <audio id="sound" className="sound" volume="0.1" autoPlay loop>
                    <source id="source" src={ require( '../../public/acceptance.mp3' ) } type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Break;
