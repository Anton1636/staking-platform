import React, { useState } from 'react'
import { IoMdClose } from './reactICON/index'
import PopUpInputField from './Admin/RegularComp/PopUpInputField'
import PupUpButton from './Admin/RegularComp/PupUpButton'
import InputRatio from './Admin/RegularComp/InputRatio'

const PoolModel = ({
	deposit,
	poolID,
	address,
	selectedPool,
	selectedToken,
	setLoader,
}) => {
	const [amount, setAmount] = useState()

	const CALLING_FUNCTION = async (poolID, amount, address) => {
		setLoader(true)
		const receipt = await createPool(poolID, amount, address)
		if (receipt) {
			console.log(receipt)
			setLoader(false)
			window.location.reload()
		}
		setLoader(false)
	}

	return (
		<div
			className='modal modal--auto fade'
			id='modal-apool'
			tabIndex={-1}
			arial-labelledby='modal-apool'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal__content'>
						<button
							className='modal__close'
							type='button'
							data-bs-dismiss='modal'
							aria-label='Close'
						>
							<i className='ti ti-x'>
								<IoMdClose />
							</i>
						</button>
						<h4 className='modal__title'>Invest</h4>
						<p className='modal__text'>Welcome to the staking platform.</p>
						<div className='modal__form'>
							<PopUpInputField
								title={`Stake ${selectedToken?.depositToken.name} token`}
								placeholder='Amount'
								handlerChange={e => setAmount(e.target.value)}
							/>
							<div className='form__group'>
								<label htmlFor='' className='form__label'>
									Pool Details:
								</label>
								<ul className='form__radio'>
									<InputRatio
										index={1}
										value={`Your Deposited: ${selectedPool?.amount} ${selectedToken?.depositToken.symbol}`}
									/>

									<InputRatio
										index={1}
										value={`Total Deposited: ${selectedPool?.depositedAMount} ${selectedToken?.depositToken.symbol}`}
									/>

									<InputRatio
										index={1}
										value={`Your Balance: ${selectedPool?.depositToken.balance.slice(
											0,
											8
										)} ${selectedToken?.depositToken.symbol}`}
									/>
								</ul>
							</div>

							<PupUpButton
								title={'Proceed'}
								handlerClick={() => CALLING_FUNCTION(poolID, amount, address)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PoolModel
