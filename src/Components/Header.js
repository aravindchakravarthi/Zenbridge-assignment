import React from 'react'
import "../Stylesheet/Header.css"
import zenbridge from '../Assets/zenbridge-logo.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineBars3 } from "react-icons/hi2";




const Header = () => {
  return (
	<div className='header'>
	  <div className='header-mxw max-width df'>
		<div className='df litems'>
			<div>
				<img src={zenbridge} alt='zenbridge-logo'/>
			</div>
			<div className='op'>About Us <MdKeyboardArrowDown /></div>
			<div className='op'>Products <MdKeyboardArrowDown /></div>
			<div className='op'>Solutions <MdKeyboardArrowDown /></div>
			<div className='op'>Pricing</div>
			<div className='op'>Developers</div>
			<div className='op'>Rresources <MdKeyboardArrowDown /></div>
		</div>
		<div className='ritems'>
			<button className='contact'>Contact Sales <MdKeyboardArrowRight /></button>
			<button className='login'>Login</button>
		</div>
		<HiOutlineBars3 className='ritems1'/>

	  </div>
	</div>
  )
}

export default Header
