from django.db import models
from user_app.models import App_User


# class User(models.Model):
#     id = models.IntegerField(primary_key=True)
#     email = models.CharField(max_length=100)
#     username = models.CharField(max_length=20)
#     password_hash = models.CharField(max_length=100)
#     date_created = models.DateTimeField(auto_now_add=True)

class SearchHistory(models.Model):
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, related_name='search_history')
    location_name = models.CharField(max_length=255)
    date_searched = models.DateTimeField(auto_now_add=True)


class GeoLocation(models.Model):
    search_history = models.ForeignKey(SearchHistory, on_delete=models.CASCADE, related_name='geo_locations')
    city_name = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=8, decimal_places=2)
    longitude = models.DecimalField(max_digits=8, decimal_places=2)
    population = models.IntegerField()
    timezone = models.CharField(max_length=255)


class WeatherData(models.Model):
    geo_location = models.ForeignKey(GeoLocation, on_delete=models.CASCADE, related_name='weather_data')
    date = models.DateField()
    temperature = models.DecimalField(max_digits=8, decimal_places=2)
    humidity = models.DecimalField(max_digits=8, decimal_places=2)
    wind_speed = models.DecimalField(max_digits=8, decimal_places=2)
    weather_condition = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    date_recorded = models.DateTimeField(auto_now_add=True)