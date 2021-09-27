import React, { useEffect, useState } from 'react';
import {
  buffer,
  fromEvent,
  interval,
  Subject,
  takeUntil,
  throttleTime,
} from 'rxjs';
import { filter } from 'rxjs/operators';
import './App.scss';
import { Buttons } from './components/Buttons';
import { DisplayTimer } from './components/DisplayTimer';

export const App: React.FC = () => {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    const unsubscribe = new Subject();

    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (timerOn) {
          setTimer(val => val + 1);
        }
      });

    return () => {
      unsubscribe.next(0);
      unsubscribe.complete();
    };
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  };

  const waitTimer = () => {
    const clicks$ = fromEvent(document, 'click');

    clicks$.pipe(
      buffer(clicks$.pipe(throttleTime(300))),
      filter(clickArray => clickArray.length > 1),
    )

      .subscribe(() => setTimerOn(false));
  };

  const resetTimer = () => {
    setTimer(0);
    setTimerOn(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex flex-column">
          <h1 className="text-center">Timer</h1>
          <DisplayTimer
            timer={timer}
          />
          <Buttons
            start={startTimer}
            wait={waitTimer}
            reset={resetTimer}
          />
        </div>
      </div>
    </div>
  );
};
