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
            <h1> Welcome Stranger.. </h1>
            <h3> How would you like to hear a tale? </h3>
            <h4> I have many, filled with Wonder beyond your imagination.. </h4>
            <h4> Terror beyond your wildest nightmares..</h4>
            <button onClick={this.handleClick}>Tell Me More...</button>
            </div> ) : null }
            {this.state.showMore === true ? ( 
              <div className="creepySpeech">
              <h1> Ha Ha Ha </h1>
              <h3> They always wish to hear more... </h3>
              <h3> Come then! </h3>
              <h4> and i shall show you... </h4>
              <Link key={"Adventure"} to={"/Adventure"}>
                  <button>Tell Me More...</button>
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