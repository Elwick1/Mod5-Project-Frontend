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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
      <Switch>
      <Route path="/Characters" component={CharactersPage}>
      </Route>
      <Route path="/StoryInfo" component={StoryInfo}>
      </Route>
      <Route path="/Author" component={AboutAuthor}>
      </Route>
      <Route exact path="/" component={() =>
        <header className="App-header">
          <div className="startBox">
            <h1> Hello Michael! </h1>
          <div className="begin">
        <button>Tell Me A Story</button>
          </div>
          </div>
        </header>}>
      </Route>
      </Switch>
      </div>
    </div>
    
  );
}

export default App;
