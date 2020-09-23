import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'

function Home() {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className="home_headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>

            <div className='home_body'>
                <img src="https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" 
                alt=""/>
            </div>
            <div className="input_container">
                <Search hideButtons/>
            </div>
        </div>
    )
}

export default Home
