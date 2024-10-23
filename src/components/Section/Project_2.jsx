import React from 'react'
import './Project_2.scss'
import { TbHandClick } from "react-icons/tb";
import ImgProject from '../../assets/Portfolio.png'
const Project_2 = () => {
    return (
         <div className='Box_Project_2'>

            <div className='Project_2_Gradient'></div>
            
            <div className='Project_2_Img'>
                <img src={ImgProject} alt="" />
            </div>

            <div className='Project_2_Content'>
                <div className='Title_Project_2_Content'>
                    <span>
                        Featured  Project
                    </span>
                    <h1>Example Project</h1>
                </div>
                <div className='Box_Project_2_Content'>
                    <span>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </span>
                </div>
                <div className='Icon_Project_2_Content'>
                    <span>
                        <TbHandClick />
                    </span>
                    <span>
                        <TbHandClick />
                    </span>
                </div>

            </div>



        </div>
    )
}

export default Project_2