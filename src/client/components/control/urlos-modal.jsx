/**
 * components/control/urlos modal
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
				src="https://www.urlos.com"
				frameborder="0"
				style={{ width: '100%', height: 'calc(100% - 48px)' }}
			>
			</iframe>
		</Modal>
	)
})
