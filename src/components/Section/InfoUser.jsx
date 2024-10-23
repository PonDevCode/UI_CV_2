import React from 'react'
import avt from '../../assets/avt-1.jpg'
import './InfoUser.scss'
import { FaFacebook } from "react-icons/fa";
import { LuArrowDownToLine } from "react-icons/lu";
const InfoUser = () => {
    return (
        <div className='Box_Info'>

            <div className='Gradient'></div>
            <div className='Img_Info'>
                <img src={avt} alt="" />
            </div>
            <div className='Content_Info'>
                <div className='User_Name'>
                    <span>
                        Hello! I AM
                    </span>
                    <span style={{ color: '#7127BA' }}>LÊ ĐÌNH TIẾN</span>
                </div>
                <div className='Title_Content'>
                    <span className='Animation text-Animation'>I'm a Software Engineer</span>
                </div>
                <div className='Title_Content_2'>
                    <span style={{ fontSize: '21px' }}>Currently, I'm a Software Engineer at  <FaFacebook />  <a href='https://www.facebook.com/profile.php?id=100068662826677'> Facebook</a> </span>
                </div>
                <div className='Content_'>
                    <span>
                        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals.
                    </span>
                    <div className='Content_Button'>
                        <button>Download CV <LuArrowDownToLine /></button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default InfoUser