# Generated by Django 4.0.1 on 2022-07-06 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_remove_order_details_status_order_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='update_date',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]