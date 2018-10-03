import React, { Component } from 'react';

import Instafeed from 'react-instafeed';

class About extends Component { 
    render() {
        const instafeedTarget = 'instafeed';
        return (
            <div className='about'>
             <a href='https://api.instagram.com/oauth/authorize/?client_id=c325734066ee4fad99ca2a87c57ef933&redirect_uri=https://instagram-max.herokuapp.com/api/instagram&response_type=code'>INSTAGRAM</a>
                <h1>about</h1>
                <div>
              
                        <div id={instafeedTarget}>
                        <Instafeed
                            limit='5'
                            ref='instafeed'
                            resolution='standard_resolution'
                            sortBy='most-recent'
                            target={instafeedTarget}
                            template=''
                            userId='userIdInstagramApiString'
                            clientId='c325734066ee4fad99ca2a87c57ef933'
                            accessToken='accessTokenInstagramApiString'
                        />
                        </div>
         
                </div>
            </div>
        )
    }
}

export default About;