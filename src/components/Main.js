import React from 'react';
import {ShotChart} from "./ShortChart"
import {Profile} from "./Profile"

export class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <Profile/>
        <ShotChart playerId={201939}/>
      </div>
    );
  }
}