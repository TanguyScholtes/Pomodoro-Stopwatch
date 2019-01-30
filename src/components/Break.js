const React = require( 'react' );

class Break extends React.Component {
    secondsToTimer ( seconds ) {
        let min = parseInt( Math.floor( seconds % 3600 / 60 ) );
        let sec = parseInt( Math.floor( seconds % 3600 % 60 ) );

        if ( sec <= 9 ) {
            sec = '0' + sec;
        }
        if ( min <= 9 ) {
            min = '0' + min;
        }

        return min + ' : ' + sec;
    }

    render () {
        return (
            <div className="container">
                <div className="modal">
                    <p>Enjoy your break. A new timer will automatically start in...</p>
                    <div className="clock">
                        <p className="clock-timer">{ this.secondsToTimer( this.props.waitingTime ) }</p>
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
