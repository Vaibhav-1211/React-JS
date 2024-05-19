import { useRef, useState } from "react";
import ResultModal from "./components/ResultModal.jsx";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }//we loss because timer is expires because we did not stop

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
      // setTimerExpired(true);
      // dialog.current.open();
    }, 10);

    // setTimerStarted(true)

  }//setting a timer

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    dialog.current.open()
    clearTimeout(timer.current);
  }


  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime}  remainingTime={timeRemaining} onReset={handleReset} />
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is Running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  )
}