import React from 'react'
import Navbar from '../Navbar/Navbar'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../App.css'
import './adventure.css'

export default class CharacterSelect extends React.Component{

    
render() {
    return ( 
        <div className="cardFlip">
            
<Flippy 
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    style={{ width: '350px', height: '350px' }} 
>
<FrontSide style={{backgroundColor: 'rgba(7, 7, 7, 0.5)',}}>
<div >
<img className="pcImg" src={this.props.image_url}></img>
    </div>
</FrontSide>
<BackSide
style={{ backgroundColor: '#282c34'}}>
    <div className="charInfo">
<br></br>
Name : {this.props.name}
<br></br>
Race : {this.props.race}
<br></br>
Class : {this.props.job}
    </div>
</BackSide>
</Flippy>
<br></br>
<br></br>
<div className="selectButton">
    <br></br>
    <br></br>
    <br></br>
    <button className="launchB" onClick={() => this.props.handleClick(this.props.id)}> Select </button>
</div>
</div>
)
}
}