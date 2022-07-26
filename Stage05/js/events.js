import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn
} from './elements.js'

export default function ({ controls, timer, sounds, onClickSound }) {
  buttonPlay.addEventListener('click', function () {
    controls.play()
    timer.countDown()
    sounds.pressButton()
  })

  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sounds.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sounds.pressButton()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes, 0)
  })

  buttonSoundOn.addEventListener('click', function () {
    onClickSound()
    sounds.bgAudio.pause()
  })
  buttonSoundOff.addEventListener('click', function () {
    onClickSound()
    sounds.bgAudio.play()
  })
}
