import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown'
import CharacterSelect from './CharacterSelect'
import AdventureContainer from './AdventureContainer'

const Pages = 'http://localhost:3000/pages/'


export default class Adventure extends React.Component {

    state = {
        selectedCharacter : {},
        start : false,
        pages : [],
        currentPage: {},
        pageId: 2,
        option: "next"
    }

    componentDidMount() {
        fetch(Pages)
        .then(res => res.json())
        .then(pages => this.setState({
            pages : pages
        }))
        
    }

    handleCharacterClick = (id) => {
        console.log(id)
        this.setState({
            selectedCharacter : this.props.characters.find(character => character.id === id),
            start : true,
            currentPage : this.state.pages.find(page => page.id === this.state.pageId)

        })
    }

    switchOption = () => {
        if(this.state.pages.length >= this.state.pageId){
        }else {
            this.setState({
                currentPage: this.state.pages.find(page => page.id === this.state.pageId + 2),
                pageId: this.state.pageId + 2
            })
        }
    }

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
                    <AdventureContainer pc={this.state.selectedCharacter} page={this.state.currentPage}/>
                ) : null }
          </div>
        </header>
        )
    }
}