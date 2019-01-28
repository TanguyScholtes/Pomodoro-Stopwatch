const React = require( 'react' );

class Clock extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            currentTime: this.props.currentTime,
            lastTimer: this.props.lastTimer,
        };
    }

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

    increaseTimer () {
        if ( this.props.running === false ) {
            this.props.currentTime += this.props.step;
            this.props.lastTimer = this.props.currentTime;
        }
        return;
    }

    decreaseTimer () {
        if ( this.props.running === false ) {
            this.props.currentTime -= this.props.step;
            this.props.lastTimer = this.props.currentTime;
        }
        return;
    }

    render () {
        return (
            <div className="container">
                <div className="clock">
                    <p className="clock-timer">{ this.secondsToTimer( this.props.currentTime ) }</p>
                    <button className="clock-modifier" onClick={ () => this.increaseTimer() }>+</button>
                    <button className="clock-modifier" onClick={ () => this.decreaseTimer() }>-</button>
                </div>
                <div className="clock-interface">
                    <button onClick={ this.props.toggle }>{ this.props.toggleText }</button>
                    <button onClick={ this.props.reset }>Reset</button>
                </div>
            </div>
        );
    }
}

export default Clock;
