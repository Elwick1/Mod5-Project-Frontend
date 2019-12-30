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
            <h1> About The Author </h1>
            <div className="authName">
            <h2>  Michael Williamson </h2>
            <div className="Auth-Img">
            <image src="">
            </image>
            </div>
            <div>
                <button onClick={this.handleClick}> Show More </button>
                {this.state.show === true ? <Bio /> : false } 
            </div>
            </div>
            </div>
                   )
    }
}
                                        