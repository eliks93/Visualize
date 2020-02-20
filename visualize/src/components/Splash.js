import React, { useState, useEffect } from 'react';
import logo from '../logo.svg'
import axios from 'axios'
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

export default function Splash() {
  const [token, setToken] = useState();

  useEffect(() => {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setToken({
        token: _token
      });
    }
  }, [])
  useEffect(() => {
    axios
  }, [token])

  return (
    <div className="Splash">
      <header className="Splash-header">
      <img src={logo} className="Splash-logo" alt="logo" />
      {!token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )} 
      {token && (
        
      )}
      </header>
    </div>
  );
}