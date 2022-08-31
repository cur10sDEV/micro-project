from django.db import models

# Create your models here.


class Note(models.Model):
    title = models.TextField(null=True, blank=False)
    body = models.TextField(null=True, blank=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title[:27]