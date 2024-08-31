import React, { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { Header, Footer, Loader, ICOSale } from '@/components/index'
import Admin from '../components/Admin/Admin'
import AdminHead from '../components/Admin/AdminHead'
import UpdateAPYModel from '../components/Admin/UpdateApyModel'
import Auth from '../components/Amin/Auth'
import {
	CONTRACT_DATA,
	transferToken,
	createPool,
	sweep,
	modifyPool,
} from '../context/index'

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS

const admin = () => {
	const { address } = useAccount()
	const [loader, setLoader] = useState(false)
	const [checkAdmin, setCheckAdmin] = useState(true)
	const [poolDetails, setPoolDetails] = useState()
	const [modifyPoolID, setModifyPoolID] = useState()

	const LOAD_DATA = async () => {
		if (address) {
			setLoader(true)

			if (address?.toLowerCase() == ADMIN_ADDRESS?.toLowerCase()) {
				setCheckAdmin(false)

				const data = await CONTRACT_DATA(address)
				console.log(data)
				setPoolDetails(data)
			}

			setLoader(false)
		}
	}

	useEffect(() => {
		LOAD_DATA()
	}, [address])

	return (
		<>
			<Header page={'admin'} />
			<AdminHead />
			<Admin
				poolDetails={poolDetails}
				transferToken={transferToken}
				address={address}
				setLoader={setLoader}
				createPool={createPool}
				sweep={sweep}
				setModifyPoolID={setModifyPoolID}
			/>
			<Footer />

			<UpdateAPYModel
				poolDetails={poolDetails}
				setLoader={setLoader}
				modifyPool={modifyPool}
				modifyPoolID={modifyPoolID}
			/>
			<ICOSale setLoader={setLoader} />

			{checkAdmin && <Auth />}
			{loader && <Loader />}
		</>
	)
}

export default admin
