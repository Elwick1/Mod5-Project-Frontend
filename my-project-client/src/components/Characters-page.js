import React from 'react'
import Navbar from '../Navbar/Navbar'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../App.css'



export default class CharactersPage extends React.Component {
    
render() {
    return(
        <div><header className="App-header">
      <div className="characterCards">
<div> 
  {this.props.characters.map(character => <div className="flipCard">
<Flippy 
flipOnHover={false} 
flipOnClick={true} 
flipDirection="horizontal"
ref={(r) => this.flippy = r} 
style={{ width: '200px', height: '200px' }} 
>
<FrontSide style={{
  backgroundColor: '#403B3B',
}}>
<div>{this.props.image}</div>
</FrontSide>
<BackSide
style={{ backgroundColor: '#403B3B'}}>
Information
</BackSide>
</Flippy>
</div>
)}
</div>
    </div>
     </header></div>
    )
}



}