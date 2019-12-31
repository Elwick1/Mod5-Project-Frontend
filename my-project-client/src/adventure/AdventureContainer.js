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
                </div>
                <div className="options">
                {this.props.page.monster === true ? 
                <div className="FIGHT">
                    <button onClick={() => this.props.roll()}> Fight For Your Life </button>
                </div> 
                :
                <div className="pageOption1">
                    <button onClick={() => this.props.leftClick()}>{this.props.page.first_option}</button>
                </div>
                }
                { this.props.page.can_die === true ? 
                <div className="pageOption2">
                    <button onClick={() => this.props.rightClick()}>{this.props.page.second_option}</button>
                </div>
                : null 
                }
                </div>
                <div className="pcInfo">
                <br></br>
                <br></br>

                    <p className="pcName">{this.props.pc.name}</p>  
                    <br></br>
                    <br></br>

                    <p className="pcJob">{this.props.pc.job}</p>
                </div>
                <div className="pcContainer"> 
                    <img className="playerPortrait" src={this.props.pc.image_url}></img>
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
                