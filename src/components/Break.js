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
                <div className="clock">
                    <p>Enjoy your break. A new timer will automatically start in...</p>
                    <p className="clock-timer">{ this.secondsToTimer( this.props.waitingTime ) }</p>
                </div>
                <div className="clock-interface">
                    <button onClick={ () => this.props.reset() }>End break</button>
                </div>
            </div>
        );
    }
}

export default Break;
