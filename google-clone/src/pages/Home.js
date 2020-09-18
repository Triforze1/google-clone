import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
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

            </div>
        </div>
    )
}

export default Home
