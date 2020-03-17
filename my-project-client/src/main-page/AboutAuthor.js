import React from 'react'
import Bio from './Bio'
import '../App.css'


export default class AboutAuthor extends React.Component {

    state = {
        showBio : false
    }

    handleClick = () => {
        this.setState({
          showBio : !this.state.showBio
        })
    }


    render() {
        return(            
            <div className="authBox">
            <h1 className="title"> About The Author </h1>
            <div className="authName">
            <h2>  Michael Williamson </h2>
            <button className="showBio" onClick={this.handleClick}> Show More </button>
                {this.state.showBio === true ? 
                <h1 className="AboutMe">
                Born in Leicester, in 1992. I Quickly grew to love Fantasy and Video games, the way that they created these 
                immense worlds and hooked you into the story was incredible 
            </h1>
             : null } 
            </div>
            </div>
                   )
    }
}
                                        