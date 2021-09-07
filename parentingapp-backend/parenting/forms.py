from django import forms
from .models import Kid


class KidForm(forms.ModelForm):
    class Meta:
        model = Kid
        fields = ["name", "image"]
