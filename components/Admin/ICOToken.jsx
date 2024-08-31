import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { LOAD_TOKEN_ICO } from '@/context/constants'
import {
	UPDATE_TOKEN,
	UPDATE_TOKEN_PRICE,
	TOKEN_WITHDRAW,
} from '@/context/index'
import ButtonComp from './RegularComp/ButtonComp'
import InputField from './RegularComp/InputField'
import ClickButton from './RegularComp/ClickButton'
import Title from './RegularComp/Title'

const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY

const ICOToken = ({ setLoader }) => {
	const { address } = useAccount()
	const [tokenDetails, setTokenDetails] = useState()
	const [updateToken, setUpdateToken] = useState()
	const [updatePrice, setUpdatePrice] = useState()

	useEffect(() => {
		const loadToken = async () => {
			const token = await LOAD_TOKEN_ICO()
			setTokenDetails(token)
			console.log(token)
		}
		loadToken()
	}, [address])

	const CALLING_FUNCTION_UPDATE_TOKEN = async updateToken => {
		setLoader(true)
		console.log(updateToken)
		const receipt = await UPDATE_TOKEN(updateToken)
		if (receipt) {
			console.log(receipt)
			setLoader(false)
			window.location.reload()
		}
		setLoader(false)
	}

	const CALLING_FUNCTION_UPDATE_PRICE = async updatePrice => {
		setLoader(true)
		console.log(updatePrice)
		const receipt = await UPDATE_TOKEN_PRICE(updatePrice)
		if (receipt) {
			console.log(receipt)
			setLoader(false)
			window.location.reload()
		}
		setLoader(false)
	}

	const CALLING_FUNCTION_TOKEN_WITHDRAW = async () => {
		setLoader(true)
		const receipt = await TOKEN_WITHDRAW()
		if (receipt) {
			console.log(receipt)
			setLoader(false)
			window.location.reload()
		}
		setLoader(false)
	}
	return (
		<div className='tab-pane fade' id='tab-6' role='tabpanel'>
			<div className='row'>
				<div className='col-12'>
					<div className='profile'>
						<ul
							className='nav nav-tabs sections__tabs sections__tabs--left'
							id='section__profile-tabs2'
							role='tablist'
						>
							<ButtonComp
								name={'Update Token'}
								tab={'f9'}
								styleClass='active'
							/>
							<ButtonComp name={'Update Token Price'} tab={'f10'} />
							<ButtonComp name={'Withdraw Token'} tab={'f11'} />
						</ul>

						<div className='tab-content'>
							<div
								className='tab-pane fade show active'
								id='tab-f9'
								role='tabpanel'
							>
								<div className='row'>
									<Title title={'Update Token Address in ICO Contract'} />
									<InputField
										size={'12'}
										type={'text'}
										title={'Address'}
										name={'crypto'}
										placeholder={`${tokenDetails?.token.symbol} ${tokenDetails?.token.name}`}
										handlerChange={e => setUpdateToken(e.target.value)}
									/>

									<ClickButton
										name={'Update Token'}
										handleClick={() =>
											CALLING_FUNCTION_UPDATE_TOKEN(updateToken)
										}
									/>
								</div>
							</div>

							<div className='tab-pane fade' id='tab-f10' role='tabpanel'>
								<div className='row'>
									<Title title={'Update Token Price in ICO Contract'} />
									<InputField
										size={'12'}
										type={'text'}
										title={'Price'}
										name={'price1'}
										placeholder={`${tokenDetails?.tokenPrice} ${CURRENCY}`}
										handlerChange={e => setUpdatePrice(e.target.value)}
									/>

									<ClickButton
										name={'Update Token'}
										handleClick={() =>
											CALLING_FUNCTION_UPDATE_PRICE(updatePrice)
										}
									/>
								</div>
							</div>

							<div className='tab-pane fade' id='tab-f11' role='tabpanel'>
								<div className='row'>
									<Title title={'Withdraw Token from ICO Contract'} />
									<ClickButton
										name={'Withdraw ALL Token'}
										handleClick={() => CALLING_FUNCTION_TOKEN_WITHDRAW()}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ICOToken
