import Sound from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds == 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        Sound().timerEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 10
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000)
  }

  function reset() {
    updateDisplay(minutes, 0)

    clearTimeout(timerTimeOut)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    countDown,
    reset,
    updateDisplay,
    hold,
    updateMinutes
  }
}
