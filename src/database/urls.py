from django.urls import path,include
from .api import getDataAPI
from .api import pushCustomerDataAPI
from .api import getUserAPI 
from .api import getRestaurantByZipAPI
from .api import getRestaurantByIDAPI
from .api import addRestaurantAPI
from .api import deleteRestaurantAPI

urlpatterns = [
    path('api/database/get',getDataAPI.as_view()),
    path('api/database/newuser',pushCustomerDataAPI.as_view()),
    path('api/database/getUser/<slug:uID>',getUserAPI.as_view()),
    path('api/database/getRestByZip/<slug:zip>',getRestaurantByZipAPI.as_view()),
    path('api/database/getRestByID/<slug:uID>',getRestaurantByIDAPI.as_view()),
    path('api/database/addRestaurant/<slug:uID>', addRestaurantAPI.as_view()),
    path('api/database/deleteRestaurant/<slug:rID>/<slug:uID>', deleteRestaurantAPI.as_view()),
]