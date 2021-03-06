# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.IntegerField(serialize=False, primary_key=True)),
                ('task', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('complete', models.BooleanField(default=b'false')),
            ],
        ),
    ]
