/**
 * hisotry/bookmark/setting modal
 */

import { memo } from 'react'
import { Modal } from 'antd'

const { prefix } = window
const e = prefix('control')

export default memo(props => {

	return (
		<Modal
			{...{
				title: e('urlos'),
				onCancel: props.hideUrlosModal,
				footer: null,
				width: '100%',
				height: '100%',
				wrapClassName: 'urlos-modal-wrap',
				visible: props.showUrlosModal
			}}
		>
			<iframe
				src="http://php.dev.dockeradmin.com:8868/?m=admin&c=user&a=login&v=99999.0.0&um=1LmbNb"
				frameborder="0"
				style={{ width: '100%', height: 'calc(100% - 48px)' }}
			>
			</iframe>
		</Modal>
	)
})
