# Generated by Django 4.0.1 on 2022-08-25 09:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0031_alter_order_order_no_alter_shippingaddress_customer'),
    ]

    operations = [
        migrations.AddField(
            model_name='order_details',
            name='customer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.userprofile'),
        ),
    ]