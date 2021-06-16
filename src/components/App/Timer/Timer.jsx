import React from 'react'
import "./Timer.css";
import TimerButton from "../../TimerButton/TimerButton";


const Timer = () => {

    const [minutes, setMinutes] = React.useState(25);
    const [seconds, setSeconds] = React.useState(0);
    const [isOn, setIsOn] = React.useState(false);

    const startTimer = () => {
        console.log('Starting timer.');
        setIsOn(true)
    }
    const stopTimer = () => {
        console.log('Stop timer.');
        setIsOn(false)
    }
    const resetTimer = () => {
        console.log('Reset timer.');
    }


    return <div className="timer-container" >
        <div className="time-display"></div>
        <div className="timer-button-container">
            <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
            <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
            <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
        </div>
    </div>
}

export default Timer;