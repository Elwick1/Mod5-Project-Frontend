import React from 'react'
import Dropdown from './Dropdown'
import '../App.css'


export default class Navbar extends React.Component {
    render() {
        return (
          <div className="navB">
              <Dropdown />
          </div>
        );
      }
}