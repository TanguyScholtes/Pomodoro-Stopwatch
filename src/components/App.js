const React = require( 'react' );
import Clock from './Clock.js';
import Modal from './Modal.js';

class App extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            timerclock: null, // interval
            currentTime: 600, // Time in seconds
            lastTimer: 600, // Last timer entered by user, in seconds
            running: false, // Is the clock ticking or paused
            step: 60, // Step to increase/decrease timer, in seconds
            toggleText: 'Start', // Text to display on toggle button
        };
    }

    clockTick () {
        this.state.currentTime--;
        return;
    }

    toggle () {
        if ( this.state.running === true ) {
            this.state.running = false;
            this.state.toggleText = 'Start';
            clearInterval( this.state.timerclock );

        } else {
            this.state.running = true;
            this.state.toggleText = 'Stop';
            this.state.timerclock = setInterval(
                () => this.clockTick(),
                1000
            );
        }
        return;
    }

    reset () {
        this.toggle();
        this.state.currentTime = this.state.lastTimer;
        return;
    }

    dismiss () {
        this.toggle();
        this.state.currentTime = this.state.lastTimer = 600;
        return;
    }

    render () {
        if ( this.state.currentTime != 0 ) {
            return (
                <Clock
                    step={ this.state.step }
                    running={ this.state.running }
                    lastTimer={ this.state.lastTimer }
                    currentTime={ this.state.currentTime }
                    toggle={ () => this.toggle() }
                    reset={ () => this.reset() }
                    toggleText={ this.state.toggleText }
                />
            );
        } else {
            return (
                <Modal
                    reset={ this.reset() }
                    dismiss={ this.dismiss() }
                />
            );
        }
    }
}

export default App;
