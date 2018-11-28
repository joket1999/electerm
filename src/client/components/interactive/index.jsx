/**
 * interactive module
 */

import {useEffect, useState} from 'react'
import createWs from '../../common/ws'
import ChangePassword from './change-password-handler'
import Interactive from './interactive-handler'

let wsRef

export default () => {
  let [acts, setActs] = useState([])
  let [act, setAct] = useState(null)

  useEffect(async () => {
    let ws = await createWs('u', 'interactive')
    ws.addEventListener('message', evt => {
      let arg = JSON.parse(evt.data)
      setActs(old => {
        if (!old.length && !act) {
          setAct(arg)
          return old
        } else {
          return [...old, arg]
        }
      })
    })
    wsRef = ws
  }, [0])

  const callback = (id, result) => {
    wsRef.send(
      JSON.stringify({id, result})
    )
    if (!acts.length) {
      return
    }
    setAct(acts[0])
    setActs(o => o.slice(1))
  }

  if (act && act.prompts) {
    return (
      <Interactive
        {...act}
        callback={callback}
      />
    )
  } else if (act) {
    return (
      <ChangePassword
        callback={callback}
        {...act}
      />
    )
  } else {
    return null
  }
}
