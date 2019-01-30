const React = require( 'react' );

class Clock extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="clock">
                    <p className="clock-timer">{ this.props.secondsToTimer( this.props.currentTime ) }</p>
                </div>
                <div className="clock-interface">
                    <button className={ this.props.running ? 'disabled clock-modifier' : 'clock-modifier' } onClick={ () => this.props.increaseTimer() }>+</button>
                    <button className="clock-toggle" onClick={ () => this.props.toggle() }>{ this.props.toggleText }</button>
                    <button className={ this.props.running ? 'disabled clock-modifier' : 'clock-modifier' } onClick={ () => this.props.decreaseTimer() }>-</button>
                </div>
                <audio id="sound" className="sound" volume="0.1" loop>
                    <source id="source" src={ require( '../../public/elevator.mp3' ) } type="audio/mpeg" />
                </audio>
            </div>
        );
    }
}

export default Clock;
