# Generated by Django 4.1.2 on 2024-02-11 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goods_unit', models.CharField(max_length=255, verbose_name='Goods Unit')),
                ('creater', models.CharField(max_length=255, verbose_name='Who created')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('is_delete', models.BooleanField(default=False, verbose_name='Delete Label')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'Goods Unit',
                'verbose_name_plural': 'Goods Unit',
                'db_table': 'goodsunit',
                'ordering': ['goods_unit'],
            },
        ),
    ]
