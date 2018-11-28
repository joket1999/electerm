/**
 * handle ssh/sftp change password event
 */

import {useState} from 'react'
import {Icon, Modal, message} from 'antd'
import InputFocus from '../common/input-auto-focus'

export default function(props) {
  let [password, setPass] = useState('')
  let {text, visible, callback, id} = props
  if (!visible) {
    return null
  }
  let submit = () => {
    let len = password.length
    if (len < 6 || len > 20) {
      return message.error('password length must >= 6 and < 20')
    }
    callback(id, password)
  }
  let cancel = () => {
    callback(id, '')
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
