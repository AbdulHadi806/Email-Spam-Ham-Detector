# Generated by Django 5.0.3 on 2024-03-28 15:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mail',
            old_name='Mail',
            new_name='subject',
        ),
    ]
