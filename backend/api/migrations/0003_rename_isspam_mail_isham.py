# Generated by Django 5.0.3 on 2024-03-28 15:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_mail_mail_subject'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mail',
            old_name='isSpam',
            new_name='isHam',
        ),
    ]