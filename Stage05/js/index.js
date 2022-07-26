import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
} from './elements.js'
import Events from './events.js'
let controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

let timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

let sounds = Sound()

function onClickSound() {
  buttonSoundOn.classList.toggle('hide')
  buttonSoundOff.classList.toggle('hide')
}

Events({ controls, timer, sounds, onClickSound })
