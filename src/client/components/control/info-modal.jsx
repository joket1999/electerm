/**
 * output app and system info
 */

import {Modal, Tabs, Tag} from 'antd'
import _ from 'lodash'

let logoPath1 = require('node_modules/electerm-resource/res/imgs/electerm-round-128x128.png').replace(/^\//, '')
let logoPath2 = require('node_modules/electerm-resource/res/imgs/electerm.png').replace(/^\//, '')
const {prefix, lang} = window
const e = prefix('control')
const m = prefix('menu')
const c = prefix('common')
const a = prefix('app')
const {TabPane} = Tabs

export default function() {
  const {getGlobal} = window
  let {
    name,
    version: packVer
  } = getGlobal('packInfo')
  let version = 'v' + packVer
  let cls1 = Math.random() > 0.5
    ? 'hide'
    : ''
  let cls2 = cls1
    ? ''
    : 'hide'
  Modal.info({
    title: `${m('about')} ` + name,
    width: window.innerWidth - 100,
    maskClosable: true,
    okText: c('ok'),
    content: (
      <div className="about-wrap">
        <Tabs defaultActiveKey="1">
          <TabPane tab={m('about')} key="1">
            {/* <div className="pd2y aligncenter">
              <img src={logoPath1} className={`iblock mwm-100 ${cls1}`} />
              <img src={logoPath2} className={`iblock mwm-100 ${cls2}`} />
            </div> */}
            <h1 className="mg2b font50">
              <span className="iblock mg1r">{name}</span>
              <Tag color="#08c">{version}</Tag>
            </h1>
            <p className="mg1b">{a('desc')}</p>
          </TabPane>
          <TabPane tab={e('userTips')} key="0">
            <ul>
              {
                lang.userTips.map(t => {
                  return (
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t
                      }}
                    />
                  )
                })
              }
            </ul>
          </TabPane>
        </Tabs>

      </div>
    )
  })
}
