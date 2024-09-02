import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import {
	Header,
	Footer,
	Loader,
	ICOSale,
	Statistics,
	Notification,
} from '../components/index'
import { CONTRACT_DATA } from '@/context/index'

const activities = () => {
	const { address } = useAccount()
	const [loader, setLoader] = useState(false)
	const [poolDetails, setPoolDetails] = useState()

	const LOAD_DATA = async () => {
		if (address) {
			setLoader(true)
			setCheckAdmin(false)
			const data = await CONTRACT_DATA(address)
			setPoolDetails(data)
			setLoader(false)
		}
	}

	useEffect(() => {
		LOAD_DATA()
	}, [address])

	return (
		<>
			<Header page={'activity'} />
			<div className='new-margin'></div>
			<Statistics poolDetails={poolDetails} />
			<Notification page={'activity'} poolDetails={poolDetails} />
			<Footer />
			<ICOSale setLoader={setLoader} />
			{loader && <Loader />}
		</>
	)
}

export default activities
