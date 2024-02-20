from django.db import models
# from django.contrib.auth.models import User
# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique = True)
    password = models.CharField(max_length=20,default = "123456")
    createdAt = models.DateTimeField(auto_now_add=True,null=True)

    def __str__(self):
        return self.name

class Location(models.Model):
    name = models.CharField(max_length = 20,unique = True)

    def __str__(self):
        return self.name
    
class Train(models.Model):
    name = models.CharField(max_length = 20)
    numb = models.CharField(max_length = 20,null=True)
    start = models.ForeignKey(Location,related_name="start" ,on_delete=models.SET_NULL, null=True)
    end = models.ForeignKey(Location,related_name="end", on_delete=models.SET_NULL, null=True)
    departure_Time = models.TimeField()
    reach_Time = models.TimeField()
    fare = models.IntegerField()

    def __str__(self):
        return self.name
    
class Ticket(models.Model):
    owner = models.ForeignKey(User,on_delete = models.CASCADE)
    train = models.ForeignKey(Train,on_delete=models.CASCADE)
    persons = models.IntegerField()
    start = models.ForeignKey(Location,related_name="startt" ,on_delete=models.CASCADE)
    end = models.ForeignKey(Location,related_name="endt", on_delete=models.CASCADE)
    fare = models.IntegerField()

    def __str__(self):
        return self.owner