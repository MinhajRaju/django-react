# Generated by Django 4.0.1 on 2022-07-06 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_remove_order_details_payment_method'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order_details',
            name='status',
        ),
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
