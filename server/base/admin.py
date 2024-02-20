from django.contrib import admin

# Register your models here.

from .models import User , Location , Train , Ticket

admin.site.register(User)
admin.site.register(Location)
admin.site.register(Train)
admin.site.register(Ticket)