from django import forms


class UploadForm(forms.Form):

    task = forms.CharField(max_length=200)
    description = forms.CharField(widget=forms.Textarea)
    complete = forms.BooleanField()
