# Generated by Django 3.0.4 on 2020-05-04 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('url', '0002_auto_20200415_1453'),
    ]

    operations = [
        migrations.AddField(
            model_name='url',
            name='title',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
