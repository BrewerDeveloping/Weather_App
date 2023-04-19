from django.urls import path, include
from . import views
from django.contrib import admin

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('signup/', views.user_sign_up, name='signup'),
    path('login/', views.user_log_in, name= 'login'), #changed from signin to login
    path('curruser/', views.curr_user, name= 'curruser'),
    path('logout/', views.user_log_out, name= 'logout'), #changed from signout to logout
    path('weather/', include('brewingweather_app.urls')),
    path('', views.send_the_index, name='index'), 
]