from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['POST'])
def weather(request):
    print(request.data['weather'])


def index(request):
    react_index = open('static/index.html')
    print("This is what serves up the index")
    return HttpResponse(react_index)