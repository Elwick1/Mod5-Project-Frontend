import React from 'react'
import './adventure.css'
import YouDied from './YouDied'

// import Navbar from './Navbar/Navbar';



export default class AdventureCon extends React.Component {

    
    // rollD20 = () => {
    //     // Math.random
    // }
     render () {
        return (
            <div className="AdventureView">
                {this.props.isDead === false ? 
                <>
                <div className="pageImage"><img src={this.props.page.image_url}></img></div>
                <div className="pageContent"><h2>{this.props.page.content}</h2></div>
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
                { this.props.page.path_id <= 2 ? "" : 
                <div className="pageOption2">
                    <button onClick={() => this.props.rightClick()}>{this.props.page.second_option}</button>
                </div>
                }
                </div>
                <div className="pcInfo">
                    <p className="pcName">{this.props.pc.name}</p>  
                    <p className="pcJob">{this.props.pc.job}</p>
                </div>
                <div className="pcContainer"> 
                    <img className="playerPortrait" src={this.props.pc.image_url}></img>
                </div>
                </>
                :
                <YouDied />
                }
                {/* <Flippy 
                    flipOnHover={false} 
                    flipOnClick={true} 
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{ width: '208px', height: '288px' }} 
                    >
                <FrontSide style={{backgroundColor: '#403B3B',}}>
                <img className="playerPortrait" src={this.props.pc.image_url}></img>
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#403B3B'}}>
            <div pcInfo>
                <br>
                </br>
                {this.props.pc.name}
                <br>
                </br>
                {this.props.pc.race}
                <br>
                </br>
                Class : {this.props.pc.job}
                </div>
                </BackSide>
                </Flippy> */}
            </div>
        )
    }
} 