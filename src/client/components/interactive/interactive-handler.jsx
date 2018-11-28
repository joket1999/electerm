/**
 * handle ssh/sftp keyboard interactive event
 */

import {useState} from 'react'
import {Icon, Modal, Input} from 'antd'
import InputFocus from '../common/input-auto-focus'
import copy from 'json-deep-copy'

export default function(props) {
  let [inputs, setInputs] = useState([])
  let {
    name,
    instructions,
    prompts,
    callback,
    id
  } = props
  let submit = () => {
    callback(id, inputs)
  }
  let cancel = () => {
    callback(id, '')
  }
  let setState = (e, i) => {
    let {value} = e.target
    let arr = copy(
      inputs
    )
    if (!arr.length) {
      arr = prompts.map(() => '')
    }
    arr[i] = value
    setInputs(arr)
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
      title={name}
      width={500}
      closable={false}
      footer={confirm}
    >
      <div className="pd1b">
        {instructions}
      </div>
      {
        prompts.map((p, i) => {
          let {
            prompt,
            echo
          } = p
          let type = echo ? 'text' : 'password'
          let Dom = i ? Input : InputFocus
          return (
            <div className="pd1b" key={prompt + '_' + i}>
              <Dom
                type={type}
                value={inputs}
                onChange={e => setState(e, i)}
                onPressEnter={submit}
                addonBefore={prompt}
              />
            </div>
          )
        })
      }
    </Modal>
  )
}
