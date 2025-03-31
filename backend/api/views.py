from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from urllib.parse import urlparse
from .models import MyModel

@api_view(['POST'])
@permission_classes([AllowAny])
def receive_data(request):
    if request.data is None:
        return Response({
            'error':'No data in request',
        }, status=status.HTTP_400_BAD_REQUEST)
    name = request.data.get('name', None)
    age = request.data.get('age', None)
    url = request.data.get('url', None)
    if name is None or age is None or url is None:
        return Response({
            'error':'No data in request',
        }, status=status.HTTP_400_BAD_REQUEST)
    parsed_url = urlparse(url)
    if not parsed_url.scheme or not parsed_url.netloc:
        return Response({
            'error':'Bad url in data',
        }, status=status.HTTP_400_BAD_REQUEST)
    
    MyModel.objects.create(
        name=name,
        age=age,
        url=url,
    )
    return Response({
        'name':name,
        'age':age,
        'url':url,
    }, status=status.HTTP_200_OK)