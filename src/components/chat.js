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
    firebase.auth().signInWithPopup(provider);
  }

  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="app">
        <p className="black-text">
          If you want your name to display... sign in! If not, you will remain
          The Plague :)
        </p>
        <div>
          {!this.state.user ? (
            <button
              className="black waves-effect waves-light btn-large"
              onClick={this.handleSignIn.bind(this)}
            >
              Sign in
            </button>
          ) : (
            <button
              className="black waves-effect waves-light btn-large"
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
