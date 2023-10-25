from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):# http://127.0.0.1:8000./shop/
    return HttpResponse("Страница кроссовок ")