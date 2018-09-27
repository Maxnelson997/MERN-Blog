import React, { Component } from 'react';

import About from './About';


export default class IG extends Component {

  
  render() {



    return (
      <div className='app'>
        <a href='https://api.instagram.com/oauth/authorize/?client_id=c325734066ee4fad99ca2a87c57ef933&redirect_uri=https://instagram-max.herokuapp.com/api/instagram&response_type=code'>INSTAGRAM</a>
        <About/>
      </div>
    );
  }
}
