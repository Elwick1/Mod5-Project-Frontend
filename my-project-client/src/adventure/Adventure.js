import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dropdown from '../Navbar/Dropdown'
import CharacterSelect from './CharacterSelect'
import AdventureContainer from './AdventureContainer'
import './adventure.css'

const Pages = 'http://localhost:3000/pages/'


export default class Adventure extends React.Component {

    state = {
        selectedCharacter : {},
        start : false,
        pages : [],
        currentPage: {},
        pageId: 0,
        isDead : false
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
            pageId: this.props.characters.find(character => character.id === id).start_Page,
            start : true,
            currentPage : this.state.pages.find(page => page.id === this.props.characters.find(character => character.id === id).start_Page)
        })
    }
    
    leftClick = () => {
        if(this.state.pageId % 2 === 1){this.setState(
            { pageId : this.state.pageId + 2,
            currentPage : this.state.pages.find(page => page.id === this.state.pageId + 2)}
        )}
        else if(this.state.pageId % 2 === 0){this.setState(
            { pageId : this.state.pageId + 2,
            currentPage : this.state.pages.find(page => page.id === this.state.pageId + 2)}
            )}
            else
        {console.log('Nope Fix it dumbass')}
    }

    rightClick = () => {
        if(this.state.pageId % 2 === 0){this.setState(
            { pageId : this.state.pageId - 2,
            currentPage : this.state.pages.find(page => page.id === this.state.pageId - 2)}
        )}
        else if(this.state.pageId % 2 === 1){this.setState(
            { pageId : this.state.pageId - 2,
                currentPage : this.state.pages.find(page => page.id === this.state.pageId - 2)}
            )}
            else
        {console.log('Nope fix it dumbass')}
    }
    // rightClick = () => {
    //     if(this.state.page.canDie === true){this.setState(
    //         {isDead : true,
                // deathPage : this.state.pages.find(page => page.deathId === this.state.pageId).
    //     })
    // }   

    rollFightD20 = () => {
       const result = Math.floor((Math.random()*21) +5)
        if ( result > this.state.currentPage.monster_health){this.leftClick()}
        else {this.setState({
            isDead : true
            // deathPage : this.state.pages.find(page => page.deathId === this.state.pageId).
        })}
    }

    // avoidtrapD20 = () => {
    //     const result = Math.floor((Math.random()*21) +5)
    //     if ( result > this.state.currentPage.trapSave){this.leftClick()}
    //     else {this.setState({
    //         isDead : true 
    //          deathPage : this.state.pages.find(page => page.deathId === this.state.pageId).
    //     })}
    // }

    render() {
        return(
            <header className="Adventure">
              {this.state.start === false ? (
                <div className="who">
                  <h1 className="pctitle"> Who's Tale would you like to hear? </h1>
                </div>
              ) : null }
              {this.state.start === false ? ( 
                <div className="adventureBox">
                {this.props.characters.map(character => <CharacterSelect handleClick={this.handleCharacterClick} {...character}/>)}
                </div> 
                ) : null }
                {this.state.start === true ? ( 
                    <AdventureContainer pc={this.state.selectedCharacter} 
                    page={this.state.currentPage} 
                    leftClick={this.leftClick} 
                    rightClick={this.rightClick}
                    roll={this.rollFightD20}
                    isDead={this.state.isDead}
                    // deathPage={this.state.deathPage}
                    />
                ) : null }
        </header>
        )
    }
}