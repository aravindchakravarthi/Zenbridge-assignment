import React from 'react'
import "../Stylesheet/Main.css"
import Stake from "../Assets/stake-wheel.png"
import Orion from "../Assets/OrionOne.png"
import icon1 from "../Assets/Icon 1.png"
import icon2 from "../Assets/Icon 2.png"
import icon3 from "../Assets/Icon 3.png"
import photo from "../Assets/Photo.png"
import badge from "../Assets/G2 Badge.png"
import faster from "../Assets/Faster.png"


const Main = () => {
	return (
		<>
			<div className='main'>
				<img className='icon-image1' src={icon1} alt='icon' />
				<img className='icon-image2' src={icon2} alt='icon' />
				<img className='icon-image3' src={icon3} alt='icon' />
				<div className='bg-image'></div>
				<div className='max-width df main-mxw'>
					<div className='litem-main'>
						<div className='jccen'>
							<h1 className='white-head'>Slay your EDI</h1>
							<h1 className='pink-head'>Integrate Faster</h1>
							<p className='para'>Leverage the power of API technology faster integrations, greater data accuracy, global connectivity & total automation.</p>
							<div className='button-div'><button className='contact'>Schedule a free demo</button></div>
						</div>
					</div>
					<div className='ritem-main'>
						<img src={Stake} alt='stake' />
					</div>
				</div>

			</div>
			<div className='pinkgrad'>
				<div className='orion'>
					<img src={Orion} alt='orion' />
					<img src={Orion} alt='orion' />
					<img src={Orion} alt='orion' />
					<img src={Orion} alt='orion' />
					<img src={Orion} alt='orion' />
					<img src={Orion} alt='orion' />
					<img src={Orion} alt='orion' />
				</div>
				<div className='Edi-container'>
					<div className='df max-width'>
						<div className='df jcsb litem-edi'>
							<div className='photo-img'>
								<div><img src={photo} alt='photo' /></div>
							</div>
							<div className='Edi-support'>
								<h2>Not just our technology, we are loved for our <span className='pink'>EDI support</span> too</h2>
								<p>"We use Zenbridge as middleware for the end-to-end sales cycle.The customer service and developer resource(s) we have partnered with have been exceptional."</p>
								<p className='pink'>Seth V, Senior Director, Operations & Logistics</p>
							</div>
						</div>
						<div className='badge-img'>
							<div><img src={badge} alt='badge' /></div>
							<div><img src={badge} alt='badge' /></div>
							<div><img src={badge} alt='badge' /></div>
							<div><img src={badge} alt='badge' /></div>
							<div><img src={badge} alt='badge' /></div>

						</div>
					</div>
				</div>
				<div className='integration-container'>
					<div className='max-width integration'>
						<div className='first'>
							<h2>We are on a mission to make <span className='pink'>integration</span> easy</h2>
							<p className='para2'>An EDI platform for all retailers, suppliers, manufacturers, transportation, 3PLs & developers.</p>
						</div>
						<div className='post-faster-box'>
								<img src={faster} />
								<h2>Faster & stabler integrations</h2>
								<p>Our API eliminates EDI complexities using a very rich modern developer toolset, resulting in faster EDI integrations &production environments that are 10X stabler than typical EDI solutions.</p>
						</div>
						<div className='post-faster-box'>
								<img src={faster} />
								<h2>Faster & stabler integrations</h2>
								<p>Our API eliminates EDI complexities using a very rich modern developer toolset, resulting in faster EDI integrations &production environments that are 10X stabler than typical EDI solutions.</p>
						</div>
						<div className='post-faster-box'>
								<img src={faster} />
								<h2>Faster & stabler integrations</h2>
								<p>Our API eliminates EDI complexities using a very rich modern developer toolset, resulting in faster EDI integrations &production environments that are 10X stabler than typical EDI solutions.</p>
						</div>
						<div className='post-faster-box'>
								<img src={faster} />
								<h2>Faster & stabler integrations</h2>
								<p>Our API eliminates EDI complexities using a very rich modern developer toolset, resulting in faster EDI integrations &production environments that are 10X stabler than typical EDI solutions.</p>
						</div>
					</div>
				</div>
			</div>



		</>

	)
}

export default Main
