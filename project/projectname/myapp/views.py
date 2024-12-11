from django.shortcuts import render
# from django.http import HttpResponse
from django.http import JsonResponse
from .models import User
from django.contrib import messages

def index(request):
    return render(request,"Homepage/index.html")

def login(request):
    return render(request, "Login/index.html")

def signup(request):
    if request.method == "POST":
        username = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")
        passwordcheck =request.POST.get("passwordcheck")

        if (password!=passwordcheck):
            messages.error(request,"re-enter same password")
            signup(request)

        else:
            # Add the user to the database
            username = User(name=username, email=email,password=password)
            username.save()
    
    return render(request, "Signup/index.html")


# # Get all users from the database
# def get_users(request):
#     users = User.objects.all().values("username", "email", "password")
#     return JsonResponse({"users": list(users)})


