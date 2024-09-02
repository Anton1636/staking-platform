import React from 'react'

const PopUpInputField = ({ title, placeholder, handlerChange }) => {
	return (
		<div className='form__group'>
			<label htmlFor='' className='form__label'>
				{title}
			</label>
			<input
				type='text'
				className='form__input'
				placeholder={placeholder}
				onChange={handlerChange}
			/>
		</div>
	)
}

export default PopUpInputField
