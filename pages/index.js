import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import {
	Header,
	HeroSection,
	Footer,
	Pools,
	PoolModel,
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
	addTokenMetaMask,
} from '../context/index'

const index = () => {
	const { address } = useAccount()
	const [loader, setLoader] = useState(false)
	const [contactUs, setContactUs] = useState(false)
	const [poolID, setPoolID] = useState()
	const [withdrawPoolId, setWithdrawPoolId] = useState()
	const [poolDetails, setPoolDetails] = useState()
	const [selectedPool, setSelectedPool] = useState()
	const [selectedToken, setSelectedToken] = useState()

	const LOAD_DATA = async () => {
		if (address) {
			setLoader(true)
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
			<Header />
			<HeroSection
				poolDetails={poolDetails}
				addTokenToMetaMask={addTokenMetaMask}
			/>
			<Statistics poolDetails={poolDetails} />
			<Pools
				setPoolID={setPoolID}
				poolDetails={poolDetails}
				setSelectedPool={setSelectedPool}
				selectedToken={selectedToken}
			/>
			<Token poolDetails={poolDetails} />
			<Withdraw
				setWithdrawPoolId={setWithdrawPoolId}
				poolDetails={poolDetails}
			/>
			<Partners />
			<Ask setContactUs={setContactUs} />
			<Footer />
			<PoolModel
				deposit={deposit}
				poolID={poolID}
				address={address}
				selectedPool={selectedPool}
				selectedToken={selectedToken}
				setLoader={setLoader}
			/>
			<WithdrawModal
				withdraw={withdraw}
				withdrawPoolId={withdrawPoolId}
				address={address}
				setLoader={setLoader}
				claimReward={claimReward}
			/>
			<ICOSale setLoader={setLoader} />

			{contactUs && <Contact setContactUs={setContactUs} />}

			{loader && <Loader />}
		</>
	)
}

export default index
