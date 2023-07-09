# Generated by Django 4.0.1 on 2022-06-09 12:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='customer_name',
        ),
        migrations.AddField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.userprofile'),
        ),
        migrations.AddField(
            model_name='order',
            name='order_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='order_no',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='payment_method',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='qty',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='retail_price',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]