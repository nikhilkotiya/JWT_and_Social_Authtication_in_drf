from rest_framework_simplejwt.views import  TokenVerifyView
from django.urls import path,include
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    path('auth/', include('drf_social_oauth2.urls', namespace='drf')),
    path('verify_token/',TokenVerifyView.as_view(),name='token_varify'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

