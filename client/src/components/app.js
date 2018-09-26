import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMessage, signUp } from '../actions/index';

import SignupForm from './signupForm';

class App extends Component {

  componentDidMount() {
    this.props.fetchMessage();
  }

  onSignup = (fields) => {
    console.log('trying to sign up with fields: ', fields);
    this.props.signUp(fields);
  }

  render() {
    return (
      <div className='app'>
        <SignupForm onSubmit={this.onSignup}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    message: state.message.message
  }
}

App = connect(mapStateToProps, {fetchMessage, signUp})(App);

export default App;
