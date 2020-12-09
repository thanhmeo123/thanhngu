import logo from './logo.svg';
import './App.css';
import react, { useState, useEffect, Component } from 'react';
//import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';    
import firebase from 'firebase';
import { firebaseApp } from './Base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      displayName: null,
      photoURL: null,
    }
  }
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler).catch(err => {
        console.log(err);
      })
  };
  authHandler = async authData => {
    const user = authData.user;
    console.log(user);
    this.setState({
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    });
  };
  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ email: null, displayName: null, photoURL: null });
  };
  showInfor = () => {
    console.log(this.state.email);
    console.log(this.state.displayName);
  }
  // checkLoginState = () => {
  //   FB.getLoginStatus(function (response) {
  //     statusChangeCallback(response);
  //   });
  // }
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary" onClick={() => this.authenticate('Facebook')}>
          Facebook
        </Button>
        <Button variant="contained" color="danger" onClick={() => this.showInfor()}>show infor</Button>
        {/* <fb:login-button  scope="public_profile,email" onlogin="checkLoginState();">
    </fb: login - button > */}
        <img src={this.state.photoURL}></img>
      </div >
    );
  }
}

export default App;
