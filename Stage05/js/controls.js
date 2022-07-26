export default function Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
}) {
  function reset() {
    buttonStop.classList.toggle('hide')
    buttonSet.classList.toggle('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function play() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
  }

  function getMinutes() {
    let newMinutes = Number(prompt('Quantos minutos'))

    if (!newMinutes) {
      return false
    }
    return newMinutes
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}
