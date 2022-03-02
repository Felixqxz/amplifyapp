import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => 
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>We now have Auth!</h1>
          </header>
          <button onClick={signOut}>Sign Out</button>
        </div>
      }
    </Authenticator>
  );
}

export default App;