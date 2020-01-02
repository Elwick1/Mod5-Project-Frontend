import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dropdown from '../Navbar/Dropdown'

export default class StoryInfo extends React.Component {
render() {
    return ( 
      <div className="storyBox">
      <h1 className="Stitle"> Story Info </h1>
      <div className="abS">
        <p className="aboutStory">
          Condemned of a crime you do not remember doing, 
          You have been Banished to the Broken realm of the mad God Brizengurt.
          Your task, To survive for as long as you can, attempt to discover why you were banished and 
          seek revenge upon those who may or may not have either set you up, or controlled your actions.
          The Story takes place in various Differing areas of the Far realm, Each protaganist having a differing adventure.
          Your Choices will determine their survival, their progress and if they can discover as to why they have been condemened
          and what exactly it was that they did. 
        </p>
        </div>
      </div>
    )
}



}