import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import './adventure.css'

export default class YouDied extends React.Component {
    render() {
        return(
            <>
            <div className="youDied">
                <img className="DeathMessage"
                src="../../public/you_died.png"
                > 
                </img>
            <Link key={"home"} to={"/"}>
             <button className="restart"> Hear Another Story </button>
            </Link>
            </div>
            </>
        )
    }
}