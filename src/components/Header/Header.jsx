import React from 'react'
import './Header.scss'

import Logo from '../../assets/Logo_header.png'
const Header = () => {
  return (
    <div className='Box_Header'>
        <div className='Nav_Header'>
            <div className='Logo_header'>
                <img src={Logo} alt="" />
            </div>
            <div className='Item_Header'>
                <ul>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Skill</li>
                    <li>Product</li>
                    <li>Contact</li>

                </ul>
            </div>

        </div>


    </div>
  )
}

export default Header