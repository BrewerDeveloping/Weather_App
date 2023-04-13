from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    react_index = open('static/index.html')
    return HttpResponse(react_index)