import React from 'react'
import './adventure.css'
import YouDied from './YouDied'

export default class AdventureCon extends React.Component {

     render () {
        return ( 
                <>
                {this.props.isDead === false ? 
            <div className="AdventureView">
                <div className="pageImage"><img className="Image" src={this.props.page.image_url}></img></div>
                <div className="storyContent">
                <div className="pageContent"><h2 className="content">{this.props.page.content}</h2></div>
                <div className="pcContainer"> 
                <div className="pcInfo">
                    <img className="playerPortrait" src={this.props.pc.image_url}></img>
                {this.props.page.monster === true ? 
                <div className="FIGHT">
                    <button className="fight" onClick={() => this.props.roll()}> Fight For Your Life </button>
                </div> 
                :
                <div className="pageOption1">
                    <button className="opt1" onClick={() => this.props.leftClick()}>{this.props.page.first_option}</button>
                    { this.props.page.can_die === true ? 
                <button className="opt2" onClick={() => this.props.rightClick()}>{this.props.page.second_option}</button> 
                : null 
                }
                </div>
                }
                </div>
                </div>
                </div>
            </div>
                :
                <YouDied death={this.props.page}/>
                // death={this.props.deathPage}
                }
                </>
        )
    }
} 
                