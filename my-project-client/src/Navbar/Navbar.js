import React from 'react'
import Dropdown from './Dropdown'
import '../App.css'


export default class Navbar extends React.Component {
    render() {
        return (
          <div className="navB">
              <Dropdown />
              <h1 className="message"> HELLO MICHAEL THIS IS YOUR NAVBAR!!!</h1>
          </div>
        );
      }
}