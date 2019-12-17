import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown'
import CharacterSelect from './CharacterSelect'
import AdventureContainer from './AdventureContainer'

// import '../App.css';


export default class Adventure extends React.Component {

    state = {
        selectedCharacter : {},
        start : false 
    }

    handleCharacterClick = (id) => {
        console.log(id)
        this.setState({
            selectedCharacter : this.props.characters.find(character => character.id === id),
            start : true
        })
    }

    // handleClick = (e) => {
    //     this.setState({
    //         start : !this.state.start
    //     })
    // }
    render() {
        return(
            <header className="App-header">
          <div className="begin">
              {this.state.start === false ? ( 
                <div className="adventureBox">
                 <h1> Who's Tale would you like to hear? </h1>
                {this.props.characters.map(character => <CharacterSelect handleClick={this.handleCharacterClick} {...character}/>)}
                </div>
                ) : null }
                {this.state.start === true ? ( 
                    <AdventureContainer pc={this.state.selectedCharacter}/>
                ) : null }
          </div>
        </header>
        )
    }
}