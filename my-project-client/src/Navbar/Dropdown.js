import React, { Component } from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

export default class Dropdown extends React.Component {
  constructor(){
   super();
  
   this.state = {
         displayMenu: false,
       };
  
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  
  };
  
  showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      });
    }
  
    hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });
  
    }

  render() {
    return (
      <div className="dropdown" >
        <div className="button" onClick={this.showDropdownMenu}> Options </div>

{ this.state.displayMenu ? (
<ul>
<li>
  <Link key={"StoryInfo"} to={"/StoryInfo"}>
    <button> Story Info </button>
  </Link>
</li>
<li>
  <Link key={"CharacterList"} to={"/Characters"}>
    <button> Character List </button>
  </Link>
</li>
<li>
  <Link key={"AboutAuthor"} to={"/Author"}>
    <button> About the Author </button>
  </Link>
</li>
<li>
  <Link key={"home"} to={"/"}>
    <button> Home </button>
  </Link>
</li>
</ul>
):
(
null
)
}
</div>
    //      <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

    //       { this.state.displayMenu ? (
    //             <Link key={"StoryInfo"} to={"/StoryInfo"}>
    //             <button> Story Info </button>
    //             </Link>
    //             <Link key={"CharacterList"} to={"/Characters"}>
    //               <button> Character List </button>
    //             </Link>
    //             <Link key={"AboutAuthor"} to={"/Author"}>
    //             <button> About the Author </button>
    //             </Link>
    //             <Link key={"home"} to={"/"}>
    //             <button> Home </button>
    //             </Link>
    )}
}
