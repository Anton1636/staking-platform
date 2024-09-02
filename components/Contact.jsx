import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import toast from 'react-hot-toast'
import { IoMdClose } from './reactICON/index'

const FORMSPREE_API = process.env.NEXT_PUBLIC_FORMSPREE_API

const Contact = ({ setContactUs }) => {
	const notifySuccess = msg => toast.success(msg, { duration: 2000 })
	const [state, handleSubmit] = useForm(FORMSPREE_API)

	if (state.succeeded) {
		return notifySuccess('Message sent successfully')
	}

	return (
		<div
			className='modal modal--auto fade show'
			id='modal-ask'
			tabIndex={-1}
			aria-labelledby='modal-ask'
			aria-modal='true'
			role='dialog'
			style={{
				display: 'block',
				paddingLeft: 0,
			}}
		>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal__content'>
						<button
							className='modal__close'
							onClick={() => setContactUs(false)}
						>
							<i className='ti ti-x'>
								<IoMdClose />
							</i>
						</button>
						<h4 className='modal__title'>Ask a questions</h4>
						<p className='modal__text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam
							ad similique laborum dolorum repudiandae explicabo.
						</p>

						<form onSubmit={handleSubmit} className='modal__form'>
							<div className='form__group'>
								<input
									type='name'
									id='name'
									name='name'
									className='form__input'
									placeholder='Name'
								/>
								<ValidationError
									prefix='Email'
									field='name'
									error={state.errors}
								/>
							</div>
							<div className='form__group'>
								<input
									type='email'
									id='email'
									name='email'
									className='form__input'
									placeholder='Email'
								/>
								<ValidationError
									prefix='Email'
									field='email'
									error={state.errors}
								/>
							</div>
							<div className='form__group'>
								<textarea
									type='message'
									id='message'
									name='message'
									className='form__input'
									placeholder='Your questions'
								/>
								<ValidationError
									prefix='Email'
									field='message'
									error={state.errors}
								/>
							</div>
							<button
								type='submit'
								className='form__btn'
								disabled={state.submitting}
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
