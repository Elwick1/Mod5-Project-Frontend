import React from 'react'
import {Link} from 'react-router-dom'
import './adventure.css'

export default class YouDied extends React.Component {
    render() {
        return(
            <>
            <div className="youDied">
                <img className="DeathMessage"src={this.props.death.death_image}></img>
                <h3>{this.props.death.death_message}</h3>
            <Link key={"home"} to={"/"}>
             <button className="restart"> Hear Another Story </button>
            </Link>
            </div>
            </>
        )
    }
}