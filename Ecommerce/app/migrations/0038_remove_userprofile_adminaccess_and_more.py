# Generated by Django 4.0.1 on 2022-12-13 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0037_alter_userprofile_adminaccess'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='adminaccess',
        ),
        migrations.AddField(
            model_name='seller_profile',
            name='adminaccess',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
