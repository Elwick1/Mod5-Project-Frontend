import React from 'react'
import './adventure.css'
// import Navbar from './Navbar/Navbar';



export default class AdventureCon extends React.Component {

    
    // rollD20 = () => {
    //     // Math.random
    // }
     render () {
        return (
            <div className="AdventureView">
                <div className="pageImage"><img src={this.props.page.image_url}></img></div>
                <div className="pageContent"><h2>{this.props.page.content}</h2></div>
                <div className="pageOption1">
                    <button onClick={() => this.props.leftClick()}>{this.props.page.first_option}</button>
                </div>
                <div className="pageOption2">
                    <button onClick={() => this.props.rightClick()}>{this.props.page.second_option}</button>
                </div>

                <div className="pcContainer"> 
                    <p className="pcName">{this.props.pc.name}</p>  
                    <p className="pcJob">{this.props.pc.job}</p>
                    <div >
                        {/* <img className="playerPortrait" src={this.props.pc.image_url}></img> */}
                    </div>
                </div>
            </div>
        )
    }
} 