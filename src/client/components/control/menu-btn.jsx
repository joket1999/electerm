/**
 * btns
 */

import {memo} from 'react'

const {prefix} = window
const e = prefix('control')
const onOpenMenu = e => {
  let {right: x, bottom: y} = e.currentTarget.getBoundingClientRect()
  x = Math.ceil(x - 15)
  y = Math.ceil(x - 12)
  window.getGlobal('popup')({
    x,
    y
  })
}
const logo = '../../images/urlssh-round-128x128.png'

export default memo(() => {
  return (
    <span
      className="mg2r mg1l iblock menu-control"
      onClick={onOpenMenu}
      title={e('menu')}
    >
      <img src={logo} width={28} height={28} />
    </span>
  )
})
