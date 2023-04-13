from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import App_User
from django.core.serializers import serialize

import json
# Create your views here.

@api_view(['POST'])
def user_sign_up(request):
    email = request.data['email']
    password = request.data['password']
    name = request.data['name']
    super_user = False
    staff = False
    if 'super' in request.data:
        super_user = request.data['super']
    if 'staff' in request.data:
        staff = request.data['staff']
    try:
        #creating a new user
        new_user = App_User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
        new_user.save()
        return JsonResponse({"success":f"{name}, your user account has been created successfully."})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False})
    
    
@api_view(['POST'])
def user_log_in(request):
    
    email = request.data['email']
    password = request.data['password']
    user = authenticate(username = email, password = password)
    if user is not None and user.is_active:
        try:
            #Creates SessionId
            login(request._request, user)
            print(user)
            return JsonResponse({'email': user.email, 'name': user.name})
        except Exception as e:
            print(e)
            return JsonResponse({'login': False})
    return JsonResponse({'login': False})



@api_view(['GET'])
def curr_user(request):
    if request.user.is_authenticated:
        #                    format       query                     options
        user_info = serialize('json', [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse(user_info_workable[0]['fields'])
    else:
        return JsonResponse({"user":None})
    
    
@api_view(['POST'])
def user_log_out(request):
    try:
        #removes session id
        logout(request)
        return JsonResponse({"logout": True})
    except Exception as e:
        print(e)
        return JsonResponse({"logout": False})
    
    
    
def send_the_index(request):
    # return the index from the React side
    the_index = open('static/index.html')
    return HttpResponse(the_index)