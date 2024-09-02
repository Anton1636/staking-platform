import React from 'react'
import ButtonComp from './RegularComp/ButtonComp'

const AdminNav = () => {
	return (
		<div className='col-12 col-lg-3'>
			<div className='section__tabs-profile'>
				<ul
					className='nav nav-tabs section__tabs section__tabs--big section__tabs--profile'
					id='section__tabs'
					role='tablist'
				>
					<ButtonComp name={'Dashboard'} tab={1} styleClass={'active'} />
					<ButtonComp name={'Investing'} tab={2} />
					<ButtonComp name={'Staking'} tab={3} />
					<ButtonComp name={'Transfer'} tab={4} />
					<ButtonComp name={'Pool'} tab={5} />
					<ButtonComp name={'ICO Token'} tab={6} />
				</ul>
			</div>
		</div>
	)
}

export default AdminNav
