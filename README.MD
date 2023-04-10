# BrewingWeather - The weather app you didn't know you needed!

## About the app
BrewingWeather will be built utilizing at least 2 APIS, a front end using React, and the backend using Django.

This full stack app is designed to be a user based weather information service.

Starting I want there to be a home page that generates current weather for the user's location using a ip fetch, and then also incorporate a 3-5 day outlook (API depending)

I want an about page that lists a little about my self and the applications technologies

Finally I want a search page that upon submit of the form used for the search bar it will generate the current weather and outlook for the location the user put in.

## WorkFlow - Rough Timeline

- Personal debate - Start Front end or backend? (Undecided)

- Front End 


  - Components
   - Navbar (Persistent across all pages)
    - Showing Logo/BrewingWeather
    - Links to Home Page(Take user to the Homepage), About Page(Takes user to the about page), and a Search Page(Essentially a route upon submit button after typing in a **valid city/location in the search bar).


  - Pages
    - HomePage
        - A page that shows weather based on the location of the user utilizing --IP Address (Auto-Fetch)	query = fetch:ip	Pass fetch:ip to the API in order to auto-detect the requester IP address and location.
    - AboutPage
        - A page that gives detail about my self as the Author and insight on the full stack app.
    - SearchPage
        - A "landing" page for submitting the form(search result) displaying current weather in the location searched.



## API's

- These are the API's I am currently deciding and will play around with to figure out which will work the best for me.

1 - https://weatherstack.com/ - leaning more towards openweathermap to achieve the use of two separate API's

2 - https://openweathermap.org/api - However this API is very simple to use.

3 - https://rapidapi.com/wirefreethought/api/geodb-cities/ - This API is a must (dont wanna pay google for theirs ;).
