import React, { Component } from "react";
import "./styles/Chat.css";
import Form from "./form";
import firebase from "firebase";
import firebaseConfig from "./config";
firebase.initializeApp(firebaseConfig);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    firebase.auth().signInWithPopup(provider);
  }

  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="app">
        <div>
          {!this.state.user ? (
            <button
              className="app__button"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            <button
              className="app__button"
              onClick={this.handleLogOut.bind(this)}
            >
              Logout
            </button>
          )}
        </div>
        <div className="app__list">
          <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default Chat;
