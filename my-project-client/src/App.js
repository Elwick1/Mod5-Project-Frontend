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
import CharactersPage from './components/Characters-page';
import StoryInfo from './components/StoryInfo';
import AboutAuthor from './components/AboutAuthor';
import Adventure from './components/Adventure';

const API = 'http://localhost:3000/characters/'


export default class App extends React.Component {

  state = {
    characters : [],
    showMore : false
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(characters => this.setState({
       characters : characters
    }))
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
            <div className="creepySpeech">
            <h1> Welcome Stranger.. </h1>
            <h3> How would you like to hear a tale? </h3>
            <h4> I have many, filled with Wonder beyond your imagination.. </h4>
            <h4> Terror beyond your wildest nightmares..</h4>
            </div>
          <div className="begin">
          <Link key={"Adventure"} to={"/Adventure"}>
        <button>Tell Me More...</button>
        </Link>
          </div>
          </div>
        </header>}>
      </Route>
      </Switch>
      </div>
    </div>
    
  );
}
}