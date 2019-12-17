import React from 'react'
import Navbar from '../Navbar/Navbar'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../App.css'

export default class CharacterSelect extends React.Component{

    
render() {
    return ( 
        <div className="cardFlip">
            
<Flippy 
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    style={{ width: '200px', height: '200px' }} 
>
<FrontSide style={{backgroundColor: '#403B3B',}}>
<div >
<img className="pcImg" src={this.props.image_url}></img>
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
Class : {this.props.job}

</BackSide>
</Flippy>
<div>
    <button onClick={() => this.props.handleClick(this.props.id)}> Select </button>
</div>
</div>
)
}
}