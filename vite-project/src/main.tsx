/* eslint-disable max-classes-per-file */
import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
import App from './App'

if (
  !new (class {
    x: any
    // eslint-disable-next-line no-prototype-builtins
  })().hasOwnProperty('x')
)
  throw new Error('Transpiler is not configured correctly')

class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }
}

const myTimer = new Timer()

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
const TimerView = observer(({ timer }: { timer: Timer }) => (
  <span>Seconds passed: {timer.secondsPassed}</span>
))

ReactDOM.render(
  <React.StrictMode>
    <TimerView timer={myTimer} />
  </React.StrictMode>,
  document.getElementById('root')
)

setInterval(() => {
  myTimer.increaseTimer()
}, 1000)
