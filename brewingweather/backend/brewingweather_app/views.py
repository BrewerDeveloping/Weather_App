from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from django.utils import timezone
from .models import SearchHistory, GeoLocation, WeatherData
from user_app.models import App_User

# Create your views here.

@api_view(['POST'])
def weather(request):
    weather_data = request.data['weather']
    forecast = request.data['forecast']
    # print(request.data['forecast'])
    
    #Now I need to get the user object
    user_id = request.user.id
    user = App_User.objects.get(id=user_id)
    
    #Now I need a new search history object
    location_name = request.data['location_name']
    search_history = SearchHistory(user=user, location_name=location_name, date_searched=timezone.now())
    search_history.save()
    
    #Now for the geolocation object
    geo_location_data = request.data['location_name']
    geo_location = GeoLocation(search_history=search_history, **geo_location_data)
    geo_location.save()
    
    #Finally weather data object for each forecast day
    for forecast_data in forecast:
        date = forecast_data['date']
        temperature = forecast_data['temperature']
        humidity = forecast_data['humidity']
        wind_speed = forecast_data['wind_speed']
        weather_condition = forecast_data['weather_condition']
        icon = forecast_data['icon']
        
        weather_data = WeatherData(geo_location=geo_location, date=date, temperature=temperature,
                                   humidity=humidity, wind_speed=wind_speed, weather_condition=weather_condition,
                                   icon=icon, date_recorded=timezone.now())
        weather_data.save()
    
    return HttpResponse('Weather data recorded')


def index(request):
    react_index = open('static/index.html')
    print("This is what serves up the index")
    return HttpResponse(react_index)