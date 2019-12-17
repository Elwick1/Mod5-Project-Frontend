import React from 'react'
import './adventure.css'
// import Navbar from './Navbar/Navbar';

const Pages = 'http://localhost:3000/pages/'


export default class AdventureCon extends React.Component {

    // rollD20 = () => {
    //     // Math.random
    // }
    state = {
        page : {}
    }

    componentDidMount() {
        fetch(Pages)
        .then(res => res.json())
        .then(page => this.setState({
            page : page
        }))
    }

    render () {
        return (
            <div className="AdventureView">
                <div className="pageImage">Image will got here</div>
                <div className="pageContent"> text will got here</div>
                <div className="pageOptions"> options will render here</div>

                <div className="pcContainer"> 
                    <p className="pcName">{this.props.pc.name}</p>  
                    <p className="pcJob">{this.props.pc.job}</p>
                    <div className="playerPortrait">
                        <img src={this.props.pc.image_url}></img>
                    </div>
                </div>
            </div>
        )
    }
} 