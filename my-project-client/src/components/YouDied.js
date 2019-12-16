import React from 'react'
import Navbar from '../Navbar/Navbar'

export default class YouDied extends React.Component {
    render() {
        return(
            <div>
                <h1> 
                    You Have Died...
                </h1>
            </div>
            <div>
                <button> 
                    Hear another Story
                </button>
            </div>
        )
    }
}