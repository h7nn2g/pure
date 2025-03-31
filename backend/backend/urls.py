from django.contrib import admin
from django.urls import path
from api.views import receive_data

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/receive/', receive_data, name='receive_data'),
]
