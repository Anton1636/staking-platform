import React, { useState } from 'react'
import ButtonComp from './RegularComp/ButtonComp'
import InputField from './RegularComp/InputField'
import ClickButton from './RegularComp/ClickButton'
import Title from './RegularComp/Title'

const Transfer = (poolDetails, transferToken, setLoader, address) => {
	const [amount, setAmount] = useState()
	const [transferAddress, setTransferAddress] = useState()

	const CALLING_FUNCTION = async (amount, transferAddress) => {
		setLoader(true)
		console.log(amount, transferAddress)
		const receipt = await transferToken(amount, transferAddress)
		if (receipt) {
			console.log(receipt)
			setLoader(false)
			window.location.reload()
		}
		setLoader(false)
	}

	return <div>Transfer</div>
}

export default Transfer
