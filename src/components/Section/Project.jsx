import React from 'react'
import './Project.scss'
import Project_Img from '../../assets/Project.png'
import { TbHandClick } from "react-icons/tb";
const Project = () => {
    return (
        <div className='Box_Project'>

            <div className='Project_Gradient'></div>
            <div className='Project_Gradient_2'></div>
            <div className='Project_1'>
                <div className='Title_Project'>
                    <span>
                        Featured  Project
                    </span>
                    <h1>Example Project</h1>
                </div>
                <div className='Box_Project_Content'>
                    <span>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </span>
                </div>
                <div className='Icon_Content'>
                    <span>
                        <TbHandClick />
                    </span>
                    <span>
                        <TbHandClick />
                    </span>
                </div>

            </div>
            <div className='Project_2'>
                <img src={Project_Img} alt="" />
            </div>



        </div>
    )
}

export default Project
