# BrewingWeather - The weather app you didn't know you needed!

## About the app
BrewingWeather is a Full Stack web application utilizing Python, Django, and PostgreSQL for backend operations; Javascript and React are utilized on the frontend.

This app was built as a final project while I was attending Code Platoon's Full Stack Software Engineer course from January -- May of 2023. The goal that was given to us
was to build a full stack application that had a working database at least 3 APIs that 2 of those had to be 3rd party. For this project I have listed the 2 third party 
APIs at the bottom of this read me. My 3rd API is a user authentication API built utilizing Django's built in userauth capabilities.

Furthermore this application was thought of through a love of weather and the distaste of add based application's. Yes of course we can all run ad blocker however a lot of times these web based weather apps ask you to disable ad blocker for their revenue stream. Now with that said of course if this application was setup live all the time and be heavily utilized API calls would begin to rack up therefore I have archived this project for a reference point of where I began to show where I can get to in comparison over time. 

Please take some time and look through this awesome project as it was a big milestone for me and I truly enjoyed it!
## WorkFlow - Rough

!!! NOTE --> I have left this section in the README as it was required during my project idea submission and I want this to stay in place for anytime I want to come back and see how my thought process/problem solving worked at the time. !!!

- Personal debate - Start Front end or backend? (Undecided)

- Front End 
  - parse weather data (JSON response from backend) and I want to extract the current weather data that is relevant to the location searched.

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


- Back End

  - Utilize the request library to retrieve weather data and send it to the front end.



## API's

1 - https://openweathermap.org/api - Obtains weather data.

2 - https://rapidapi.com/wirefreethought/api/geodb-cities/ - Allows for search capabilities dependant on parameters (population/country) additionally this API allows for   autocompletion of user searches.
