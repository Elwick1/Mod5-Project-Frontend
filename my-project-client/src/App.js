import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CharactersPage from './main-page/Characters-page';
import StoryInfo from './main-page/StoryInfo';
import AboutAuthor from './main-page/AboutAuthor';
import Adventure from './adventure/Adventure';

const PCs = 'http://localhost:3000/player_characters'


export default class App extends React.Component {

  state = {
    characters : [],
    showMore : false
  }

  componentDidMount() {
    fetch(PCs)
    .then(res => res.json())
    .then(characters => this.setState({
       characters : characters
    }))
  }

  handleClick = () => {
    this.setState({
      showMore : true
    })
  }
  

  render () {
    return (
    <div className="App">
      <Navbar/>
      <div>
      <Switch>
      <Route path="/Characters" render={(props) => <CharactersPage {...props} characters={this.state.characters}/>} >
      </Route>
      <Route path="/StoryInfo" component={StoryInfo}>
      </Route>
      <Route path="/Author" component={AboutAuthor}>
      </Route>
      <Route path="/Adventure" render={(props) => <Adventure {...props} characters={this.state.characters}/>}>
      </Route>
      <Route exact path="/" component={() =>
        <header className="App-header">
          <div className="startBox">
            {this.state.showMore === false ? (
            <div className="creepySpeech">
            <h3 className="part1"> How would you like to hear a tale? </h3>
            <button className="button1" onClick={this.handleClick}>Thats... Why i'm here.</button>
            <img src='../public/bkg.jpg'></img>
            </div> ) : null }
            {this.state.showMore === true ? ( 
              <div className="creepySpeech">
              <h4 className="part2"> I have many, filled with Wonder beyond your imagination, Terror beyond your wildest nightmares...</h4>
              <h4 className="part3"> Prepare to open up your mind and join us on a journey through time and space</h4>
              <Link key={"Adventure"} to={"/Adventure"}>
                  <button className="button2">Let the adventure begin</button>
              </Link>
            </div>
              ) : null }
          </div>
        </header>}>
      </Route> 
      </Switch>
      </div>
    </div>
    
  );
}
}