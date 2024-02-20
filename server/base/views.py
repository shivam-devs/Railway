from django.http import JsonResponse
from .models import User
from .serializers import UserSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['GET','POST'])
def Login(req):
   user = User.objects.all().filter(email=req.data["email"])
   serializer = UserSerializer(user, many=True)
   if serializer.data == []:
      return Response("Not Registered yet!", status=status.HTTP_404_NOT_FOUND)
   elif serializer.data[0]["password"] != req.data["password"]:
      return Response("Incorect password !",status=status.HTTP_401_UNAUTHORIZED)
   else:
      return Response(serializer.data,status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET','POST'])
def Register(req):
   if(req.method == 'POST'):
      print(req.data)
      user = User.objects.all().filter(email=req.data["email"])
      serializercheck = UserSerializer(user, many=True)
      if serializercheck.data != []:
         return Response("Already Registered !", status = status.HTTP_409_CONFLICT)
      serializer = UserSerializer(data=req.data)
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data, status = status.HTTP_201_CREATED)
      else :
         return Response("All input required", status = status.HTTP_400_BAD_REQUEST)