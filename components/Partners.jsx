import React from 'react'

const Partners = () => {
	const partners = [
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
		{
			name: 'Your Ads',
			image: '/components/logo.png',
			url: 'https://github.com/Anton1636',
		},
	]
	return (
		<section id='partners' className='section'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-8 offset-xl-2'>
						<div className='section__title'>
							<h2>Our partners</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
								quod praesentium perspiciatis, repellendus vitae illum, ducimus
								repudiandae ex molestias vero saepe soluta eligendi natus
								consequuntur dolorum voluptate assumenda libero. Quasi?
							</p>
						</div>
					</div>
				</div>

				<div className='row'>
					{partners.map((partner, index) => (
						<div key={index} className='col-6 col-lg3'>
							<a href={partner.link} className='partner'>
								<img src={partner.image} alt='' />
								<p>{partner.name}</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
export default Partners
