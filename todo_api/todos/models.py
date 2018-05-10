from django.db import models

# Create your models here.
class Todo(models.Model):
    id=models.IntegerField(primary_key=True)
    task=models.CharField(max_length=200)
    description=models.TextField()
    complete=models.BooleanField(default="false")


    def __unicode__(self):
        return self.task