import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import './adventure.css'

export default class YouDied extends React.Component {
    render() {
        return(
            <>
            <div className="youDied">
                <h1 className="DeathMessage"> 
                    You Have Died...
                </h1>
            <Link key={"home"} to={"/"}>
             <button className="restart"> Hear Another Story </button>
            </Link>
            </div>
            </>
        )
    }
}