import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import {
	Header,
	HeroSection,
	Footer,
	Pools,
	PoolsModel,
	WithdrawModal,
	Withdraw,
	Partners,
	Statistics,
	Token,
	Loader,
	Notification,
	ICOSale,
	Contact,
	Ask,
} from '../components/index'
import {
	CONTRACT_DATA,
	deposit,
	withdraw,
	claimReward,
	addTokenToMetaMask,
} from '../context/index'

const index = () => {
	return (
		<>
			<Header />
			<Footer />
		</>
	)
}

export default index
