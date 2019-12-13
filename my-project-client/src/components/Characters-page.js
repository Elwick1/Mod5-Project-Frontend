import React from 'react'
import Navbar from '../Navbar/Navbar'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import '../App.css'
import CharacterCard from './CharacterCard';



export default class CharactersPage extends React.Component {
    
render() {
    return(
        <div><header className="App-header">
      <div className="characterCards">
<div> 
  {this.props.characters.map(character => <CharacterCard {...character}/>)}
</div>
    </div>
     </header></div>
    )
}



}