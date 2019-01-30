const React = require( 'react' );

class Clock extends React.Component {
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
                    <p className="clock-timer">{ this.secondsToTimer( this.props.currentTime ) }</p>
                </div>
                <div className="clock-interface">
                    <button className={ this.props.running ? 'disabled clock-modifier' : 'clock-modifier' } onClick={ () => this.props.increaseTimer() }>+</button>
                    <button className="clock-toggle" onClick={ () => this.props.toggle() }>{ this.props.toggleText }</button>
                    <button className={ this.props.running ? 'disabled clock-modifier' : 'clock-modifier' } onClick={ () => this.props.decreaseTimer() }>-</button>
                </div>
            </div>
        );
    }
}

export default Clock;
