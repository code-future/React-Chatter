# React Chatter

## Introduction
In this project, you'll be building out the main features of a realtime chat app.

## Concepts
Make sure you have a basic understanding of these topics!
[] React
[] ES6
[] Firebase
[] Network requests
[] Node/NPM

## Steps:
0. Setup

   a. First, make sure you clone the repo on your computer. `git clone https://github.com/code-future/React-Chatter.git`
   
   b. Once you're in the root folder of the project, you need to install the libraries that our app uses. Use `yarn` if you      have it. Otherwise, run `npm install`.
   
   c. Open the folder in your favorite text editor.
   
   d. Start the app with `npm start`. In Chrome/Firefox, go to `localhost:8080`. 
   
   e. Up and running 🚀
   
1. Structure
  
   a. First, take some time to see if you can understand what the app is doing so far. Interact with the app, and take some      time to read through the source code. 
   
   b. Folder/file descriptions. * indicates that these files are incomplete, so they need your help!
   ```
   react-chatter
   │   .babelrc <-- Our configuration for [Babel](https://babeljs.io/)
   |   .gitignore <-- Where we list the files/folders we want git to ignore
   |   * App.jsx <-- The root React file for our app. Start here!
   |   index.html <-- The root HTML file for our webpage.
   |   package.json <-- NPM's configuration file. Here you'll find start scripts and our list of libraries.
   │   README.md <-- Hey that's me!
   |   webpack.config.js <-- Webpack's configuration file. Tells Webpack what/where to compile
   │
   └───components <-- Our React Components go in here
   │   │   * ChatInput.jsx <-- The input box for the chat 
   │   │   * ChatList.jsx <-- The place where the chats show up
   |   |   UserModal.jsx <-- The popup modal that asks for the user's name
   │   │
   └───node_modules <-- This huge folder is where Node/NPM installs our libraries (modules). Not really worth looking at
   |   |
   |   |
   └───stylesheets <-- Our style files (SASS, CSS) go here
   │   │   main.scss <-- The main style file for our app.
   |   |   
   │   │
   ```
   
2. Getting chats
  
   a. First order of business: this is a chat app, so we need to be able to see the chats. We're using 
   [Firebase](https://firebase.google.com/) as our way of storing chats. Your task is to connect to our Firebase using the `firebase` node module.
   
   b. We've initialized Firebase for you in `App.jsx`, but we're not doing anything with it. 
   
   c. 
   
3. Allow user to send chats


Bonus:
- 
