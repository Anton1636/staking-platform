import React from 'react'

const ClickButton = ({ name, handleClick }) => {
	return (
		<div className='col-12'>
			<button
				type='button'
				onClick={handleClick}
				className='form__btn from_-btn--small'
			>
				{name}
			</button>
		</div>
	)
}

export default ClickButton
