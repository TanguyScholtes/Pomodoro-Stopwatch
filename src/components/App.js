const React = require( 'react' );
import Clock from './Clock.js';
import Modal from './Modal.js';
import Break from './Break.js';

class App extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            timerclock: null, // timer interval
            currentTime: 5, // Timer in seconds
            lastTimer: 1200, // Last timer entered by user, in seconds
            running: false, // Is the clock ticking or paused
            step: 60, // Step to increase/decrease timer, in seconds
            toggleText: 'Start', // Text to display on toggle button
            waitingTime: 0, // Break time in seconds
            waitingclock: null // break interval
        };
    }

    clockTick () {
        if ( this.state.currentTime <= 0 ) {
            this.setState( {
                currentTime: 0,
                running: false,
                toggleText: 'Start',
            } );
            clearInterval( this.state.timerclock );
        } else {
            this.setState( {
                currentTime: this.state.currentTime - 1
            } );
        }
        return;
    }

    waitingTick () {
        if ( this.state.waitingTime <= 1 ) {
            this.setState( {
                waitingTime: 0,
            } );
            clearInterval( this.state.waitingclock );
            this.reset();
            this.toggle();
        } else {
            this.setState( {
                waitingTime: this.state.waitingTime - 1
            } );
        }
        return;
    }

    increaseTimer () {
        if ( this.state.running === false ) {
            this.setState( {
                currentTime: this.state.currentTime + this.state.step,
                lastTimer: this.state.currentTime + this.state.step
            } );
        }
        return;
    }

    decreaseTimer () {
        if ( this.state.running === false ) {
            if ( this.state.currentTime - this.state.step >= 60 ) {
                this.setState( {
                    currentTime: this.state.currentTime - this.state.step,
                    lastTimer: this.state.currentTime - this.state.step
                } );
            }
        }
        return;
    }

    toggle () {
        if ( this.state.running === true ) {
            this.reset();
            document.getElementById( 'sound' ).pause();
        } else {
            this.setState( {
                running: true,
                toggleText: 'Reset',
                timerclock: setInterval(
                    () => this.clockTick(),
                    1000
                )
            } );
            document.getElementById( 'sound' ).play();
        }
        return;
    }

    reset () {
        this.setState( {
            running: false,
            toggleText: 'Start',
            currentTime: this.state.lastTimer,
            waitingTime: 0
        } );
        clearInterval( this.state.timerclock );
        return;
    }

    dismiss () {
        this.setState( {
            running: false,
            toggleText: 'Start',
            currentTime: 1200,
            lastTimer: 1200,
            waitingTime: 0
        } );
        clearInterval( this.state.timerclock );
        return;
    }

    break ( event, duration ) {
        event.preventDefault();
        this.setState( {
            waitingTime: duration,
            waitingclock: setInterval(
                () => this.waitingTick(),
                1000
            )
        } );
        return;
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

    render () {
        if ( this.state.currentTime != 0 && this.state.waitingTime === 0 ) {
            return (
                <Clock
                    secondsToTimer={ ( seconds ) => this.secondsToTimer( seconds ) }
                    running={ this.state.running }
                    currentTime={ this.state.currentTime }
                    toggle={ () => this.toggle() }
                    toggleText={ this.state.toggleText }
                    increaseTimer={ () => this.increaseTimer() }
                    decreaseTimer={ () => this.decreaseTimer() }
                />
            );
        } else if ( this.state.waitingTime != 0 ) {
            return (
                <Break
                    secondsToTimer={ ( seconds ) => this.secondsToTimer( seconds ) }
                    waitingTime={ this.state.waitingTime }
                    reset={ () => this.reset() }
                />
            );
        } else {
            return (
                <Modal
                    reset={ () => this.reset() }
                    dismiss={ () => this.dismiss() }
                    break={ ( event, duration ) => this.break( event, duration ) }
                />
            );
        }
    }
}

export default App;
