from django.shortcuts import render
import pyrebase


# Firebase credentials

def credentials():
    config = {
        "apiKey": "AIzaSyBJJSSETfxQc9tmsbOI-dmlQOG_dbiS3_4",
        "authDomain": "csci387.firebaseapp.com",
        "databaseURL": "https://csci387.firebaseio.com",
        "projectId": "csci387",
        "storageBucket": "csci387.appspot.com",
        "messagingSenderId": "930472814810"
    }

    firebase = pyrebase.initialize_app(config)

    return firebase

# To LOGIN
def login(request):
    auth = credentials().auth()
    return auth.sign_in_with_email_and_password(request['email'], request['pwd'])

# To REGISTER
def register(request):
    auth = credentials().auth()
    return auth.create_user_with_email_and_password(request['email'], request['pwd'])