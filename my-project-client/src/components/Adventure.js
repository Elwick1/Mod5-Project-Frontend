import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown'
import CharacterContainer from '../containers/CharacterContainer'

// import '../App.css';


export default class Adventure extends React.Component {

    state = {
        start : false 
    }

    handleClick = (e) => {
        this.setState({
            start : !this.state.start
        })
    }
    render() {
        return(
            <header className="App-header">
          <div className="begin">
          {this.state.start === false ? (
          <div className="creepySpeech">
            <h1> Ha Ha Ha </h1>
            <h3> They always wish to hear more... </h3>
            <h3> Come then! </h3>
            <h4> and i shall show you... </h4>
            
          <h1 onClick={this.handleClick}> Click To Begin... </h1>
          </div>
              ) : null }
          {this.state.start === true ? (
              <div className="adventureBox">
                <h1> Who's Tale would you like to hear? </h1>
                {this.props.characters.map(character => <CharacterContainer {...character}/>)}
                {/* <div className="Char1"> <CharacterContainer /></div>
                <div className="char2"> <CharacterContainer /></div>
                <div className="char3"> <CharacterContainer /></div>
                <div className="char4"> <CharacterContainer /></div>
                <div className="char5"> <CharacterContainer /></div>
                <div className="char6"> <CharacterContainer /></div> */}
              </div>
          ) : null
          }
          </div>
        </header>
        )
    }
}