import React, { Component } from 'react';

var jj = require('Jimmy-Johns');
 
var all_sandwiches = jj.get_menu();
// var sandwich = (all_sandwiches[0]).data;

class JJ extends Component {
    render() {
        console.log(all_sandwiches);
        return (
            <div className='jj'>
                
            </div>
        )
    }
}

export default JJ;