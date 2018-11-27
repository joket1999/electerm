/**
 * handle ssh/sftp keyboard interactive event
 */

import {useState} from 'react'
import {Icon, Modal, message} from 'antd'
import InputFocus from '../common/input-auto-focus'

export default function(props) {
  let [inputs, setInputs] = useState([])
  let {
    name,
    instructions,
    prompts,
    visible,
    modifier,
    id
  } = props
  if (!visible) {
    return null
  }
  let submit = () => {
    // if (password.length < 6) {
    //   return message.error('password length must > 6')
    // }
    // window._require('electron')
    //   .ipcRenderer
    //   .send(id, password)
    modifier({
      changePasswordProps: {
        visible: false
      }
    })
  }
  let cancel = () => {
    window._require('electron')
      .ipcRenderer
      .send(id, '')
    modifier({
      changePasswordProps: {
        visible: false
      }
    })
  }
  let confirm = (
    <span>
      <Icon
        type="check"
        className="pointer"
        onClick={submit}
      />
      <Icon
        type="close"
        className="mg1l pointer"
        onClick={cancel}
      />
    </span>
  )
  return (
    <Modal
      title={text}
      width={500}
      closable={false}
      footer={null}
    >
      <InputFocus
        type="password"
        value={password}
        onChange={e => setPass(e.target.value)}
        onPressEnter={submit}
        addonAfter={confirm}
      />
    </Modal>
  )
}
