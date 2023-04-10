# BrewingWeather - The weather app you didn't know you needed!

## About the app
BrewingWeather will be built utilizing at least 2 APIS, a front end using React, and the backend using Django.

This full stack app is designed to be a user based weather information service. I want to build this application to have a initial "landing page" that is sleek and clean allowing a user login or create a new user.

Utilizing a login capability I want the user to be able to set a 'home' location upon login and getting pushed as a new user to a settings page that will use an API to gather a location for the users weather. 

After the user has been created and 'home' location set, I want the user to be able to click a home button via a clean/modern navbar. Lets actually talk about the navbar. The goal for my navbar is to have the title BrewingWeather, potentially set the middle of the navbar to say current time or location. A search bar and submit button that will allow the user to select a location for weather information. Finally I potentially want to add a dropdown bar that shows 'Home'(For the homepage), previous searches(these searches should be stored on the database side and only up to lets say 10 and have previous searchs show this info on a 'history' page), settings(navigates the user to a settings page), potentially a about page, and then finally a logout button that will sign the user out.


## WorkFlow - Rough Timeline

- Personal debate - Start Front end or backend? (Undecided)

- Front End 
  - Pages
    - LandingPage 
        - A page that shows a login screen that allows a existing user to log in or create a new user. Using a Username and password. In the event that the user is already existing I want to ask the user to signup. All this info needs to be sent/stored in the database and queried upon submission.

    - HomePage
        - A page that shows weather based on the 'home' location set by the user.



## API's

- These are the API's I am currently deciding and will play around with to figure out which will work the best for me.

1 - https://weatherstack.com/ 

2 - https://openweathermap.org/api

3 - https://rapidapi.com/wirefreethought/api/geodb-cities/
