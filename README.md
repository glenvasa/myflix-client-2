# MyFlix-Client (React/Redux)

- Client-side movies application developed with React and Redux.
- Utilizes MyFlix REST API hosted at https://myflix2020.herokuapp.com. 
- Server-side code is found at https://github.com/glenvasa/movie_api. 
- MongoDB stores User and Movie Collections.

## Screenshots

<img src="src/images/Screenshot (247).png"> 
<img src="src/images/Screenshot (252).png">

## Features

- Users Register and Login from Welcome Screen
- Users immediately brought to MainView page that displays all movies stored in database.
- Users have the option to search/sort movies in MainView or click button to view specific movie's details
- MovieView page contains movie's description, genre name, and director; also allows user to add movie to list of favorites and/or click button to view additional genre or director information.
- Profile page contains User's Favorite Movies List in which User can navigate to a specific favorite movie's MovieView page, remove movie from Favorites List, or navigate to Update Profile Page if they wish to modify any login credentials.  

## Technical Information

- Single-Page React Application (SPA).
- React Routing used to navigate between views and share URLs.
- Developed with React, ES2015+, and React-Redux.
- Uses Bootstrap UI library for styling and responsiveness.
- Utilizes a mix of class and functional React components

## Deployed Application

- https://myflix-react-2021.netlify.app/
- (username: movies/ password: movies to test, or register a new user)
