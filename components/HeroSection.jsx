import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { LOAD_TOKEN_ICO } from '@/context/constants'
import { TiTick } from './reactICON/index'

const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY

const HeroSection = ({ addTokenMetaMask }) => {
	const { address } = useAccount()
	const [percentage, setPercentage] = useState()
	const [tokenDetails, setTokenDetails] = useState()

	useEffect(() => {
		if (address) {
			const loadToken = async () => {
				const token = await LOAD_TOKEN_ICO()
				setTokenDetails(token)
			}
			loadToken()
		}
	}, [address])

	useEffect(() => {
		const calculatePercentage = () => {
			const tokenSold = tokenDetails?.tokenSold ?? 0
			const tokenTotalSupply =
				tokenDetails?.soldTokens + Number(tokenDetails?.tokenBal) * 1 ?? 1

			const percentageNew = (tokenSold / tokenTotalSupply) * 100
			if (tokenTotalSupply === 0) {
				console.log("Token balance is zero, can't calculate percentage")
			} else {
				setPercentage(percentageNew)
			}
		}

		const timer = setTimeout(calculatePercentage, 1000)

		return () => clearTimeout(timer)
	}, [tokenDetails])

	return (
		<section id='home' className='hero'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-lg-7 col-xl-6'>
						<div className='hero__content hero__content--first'>
							<h1 className='hero__title'>
								<strong>Staking Platform</strong>
								Best return on your investment
							</h1>

							<div className='hero__btns'>
								<a
									data-bs-target='#modal-deposit1'
									type='button'
									data-bs-toggle='modal'
									className='hero__btn'
								>
									Buy {tokenDetails?.symbol || ''}
									Token
								</a>

								<a
									onClick={() => addTokenMetaMask()}
									className='nero__btn hero__btn--light'
								>
									Add Token {tokenDetails?.symbol || ''}
								</a>
							</div>
						</div>
					</div>

					<div className='col-12 col-lg-6 col-xl-5'>
						<div className='hero__content hero__content--second'>
							<div className='node node--hero'>
								<h3 className='node__title node__tittle--red'>
									<b>{tokenDetails?.symbol || ''}</b>Token ICO
								</h3>
								<span className='node__date'>
									{tokenDetails?.tokenPrice || ''}
									{CURRENCY}
								</span>
								<span className='node__price'>
									ICO Left:{' '}
									<b>
										{tokenDetails?.tokenBal || ''} {tokenDetails?.symbol}
									</b>
								</span>
								<span className='node__line'>
									<img src='/img/dodgers/dots--line-red.svg' alt='line' />
								</span>
								<ul className='node__list'>
									<li>
										<i className='ti'>
											<TiTick />
										</i>
										<b>1.1%</b> of the deposit amount
									</li>
									<li>
										<i className='ti'>
											<TiTick />
										</i>
										<b>
											{tokenDetails?.supply}
											{tokenDetails?.symbol}
										</b>
										{''}
										total supply
									</li>
								</ul>

								<div className={'progressbar progressbar--cta'}>
									<h3 className='progressbar__title'>
										ICO sale: {tokenDetails?.soldTokens}
										{tokenDetails?.symbol}
									</h3>

									<div
										className='progress'
										role='progress'
										aria-activedescendant=';-label="Animated striped'
										aria-valuenow={75}
										aria-valuemin={0}
										aria-valuemax={100}
									>
										<div
											className='progress-bar progress-bar-striped progress-bar-animated'
											style={{ width: `${percentage}%` }}
										>
											<span>{tokenDetails?.soldTokens}</span>
										</div>
									</div>

									<div className='progress__values'>
										<span className='progress__value progress__value--right'>
											{Number(tokenDetails?.tokenBal || 0) +
												Number(tokenDetails?.soldTokens || 0)}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
