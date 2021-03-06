# spotify-ops
This Repo was spun off of spotify-node-react-starter-kit to be a toolbelt using Spotify's APIs.

## Component Overview
### auth-server
The auth server for handling the oauth flow with spotify
### client
The web portal. For today, this just handles Oauth
### discovery
A function meant to be hosted on lambda for saving discover weekly playlist once a week
### graphql
Graphql server that exposes data to the frontend
### ops
REST services. Currently just saves top info from spotify to local mongo

## Getting Started

### 1) Create an App
- Visit https://developer.spotify.com/ 
- Log in and create an app
- Enter http//localhost:8888/callback as the redirect uri
- Save your changes
- Copy down the following: Redirect uri, client id, client secret


### 2)  Start Auth Server
- Navigate to the auth-server directory `cd auth-server`
- Install the dependencies `npm install`
- Paste in the redirect uri, client id, and client secret you copied in step 1
- Run the Server `node authorization_code/app.js`

### 3)  Start Client
- Navigate to the auth-server directory `cd client`
- Install the dependencies `npm install`
- Run the Server `npm start`

### 4)  Use the App
- Make sure you have a song playing (or paused) on a Spotify app
- Visit http://localhost:3000
- Click 'Log in with Spotify' and log in
- Copy the refresh token (in the url)