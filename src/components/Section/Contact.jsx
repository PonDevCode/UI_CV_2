import React from 'react'
import './Contact.scss'
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { PiDribbbleLogoBold } from "react-icons/pi";
const Contact = () => {
    return (
        <div className='Contact'>
            <div className='Box_Contact'>
                <div className='Title_Contact'>
                    <span>
                        Contact
                    </span>
                </div>
                <div className='Content_Contact'>
                    <span>
                        I'm currently looking to join a cross-functional team that values improving people's lives
                        through accessible design. or have a project in mind? Let's connect
                    </span>
                    <p>vpttuyen@gmail.com</p>
                </div>
                <div className='Footer_Contact'>
                    <div className='Icon_Contact'>
                        <FaInstagram />
                    </div>
                    <div className='Icon_Contact'>
                        <FaGoogle />
                    </div>
                    <div className='Icon_Contact'>
                        <PiDribbbleLogoBold />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact