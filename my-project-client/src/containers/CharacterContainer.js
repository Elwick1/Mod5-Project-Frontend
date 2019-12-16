import React from 'react'
import Navbar from '../Navbar/Navbar'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../App.css'

export default class CharacterContainer extends React.Component{

    state = {
        selectedCharacter : null
    }

    handleClick = (e) => {
        console.log(e.target.value)
        this.setState({
            selectedCharacter : e.target.value
        })
    }
render() {
    return ( 
        <div className="cardFlip">
            <div>
                <button key={this.props.id} onClick={this.handleClick}> Select </button>
            </div>
<Flippy 
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    style={{ width: '200px', height: '200px' }} 
>
<FrontSide style={{backgroundColor: '#403B3B',}}>
<div>
<img className="pcImg" src={this.props.image}></img>
    </div>
</FrontSide>
<BackSide
style={{ backgroundColor: '#403B3B'}}>
    {this.props.name}
<br>
</br>
{this.props.race}
<br>
</br>
Class : {this.props.class}
</BackSide>
</Flippy>
</div>
)
}
}