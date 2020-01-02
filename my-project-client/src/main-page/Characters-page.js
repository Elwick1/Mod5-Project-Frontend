import React from 'react'
import Navbar from '../Navbar/Navbar'
import CharacterCard from '../containers/CharacterCard'



export default class CharactersPage extends React.Component {
    
render() {
    return(
      <div className="characterCards">
    {this.props.characters.map(character => <CharacterCard {...character}/>)}
      </div>
    )
}



}