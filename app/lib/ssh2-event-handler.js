/**
 * handle ssh2 ssh/sftp client event
 * including keyboard-interactive, change password
 * notify front-end to do something
 */

const {generate} = require('shortid')
const {
  ipcRenderer
} = require('electron')
//const log = require('electron-log')
const timeout = 1000 * 60 * 15

/**
 * keyboard-interactive(< string >name, < string >instructions, < string >instructionsLang, < array >prompts, < function >finish) - The server is asking for replies to the given prompts for keyboard-interactive user authentication. name is generally what you'd use as a window title (for GUI apps). prompts is an array of { prompt: 'Password: ', echo: false } style objects (here echo indicates whether user input should be displayed on the screen). The answers for all prompts must be provided as an array of strings and passed to finish when you are ready to continue. Note: It's possible for the server to come back and ask more questions.
 * @param {string} name
 * @param {string} instructions
 * @param {string} instructionsLang
 * @param {array} prompts
 * @param {function} finish
 */
function onKeyboardInteractive(
  name,
  instructions,
  instructionsLang,
  prompts,
  finish
) {
  console.log(  name,
    instructions,
    instructionsLang,
    prompts,
    finish
  )
  let id = generate()
  let handler
  require('./win').win.webContents.send('keyboard-interactive', {
    name,
    instructions,
    instructionsLang,
    prompts,
    id
  })
  const onEvent = (data) => {
    clearTimeout(handler)
    console.log('onevent ', data)
    ipcRenderer.removeListener(id, onEvent)
    finish(data)
  }
  handler = setTimeout(() => {
    ipcRenderer.removeListener(id, onEvent)
  }, timeout)
  ipcRenderer.on(id, onEvent)

}

function onChangePassword(
  message,
  language,
  done
) {
  console.log(
    message,
    language
  )
  let id = generate()
  let handler
  require('./win').win.webContents.send('keyboard-interactive', {
    message,
    language,
    id
  })
  const onEvent = (data) => {
    clearTimeout(handler)
    console.log('onevent ', data)
    ipcRenderer.removeListener(id, onEvent)
    done(data)
  }
  handler = setTimeout(() => {
    ipcRenderer.removeListener(id, onEvent)
  }, timeout)
  ipcRenderer.on(id, onEvent)
}

module.exports = {
  onKeyboardInteractive,
  onChangePassword
}
