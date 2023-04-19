from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.App_User)
class App_UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email')