# Generated by Django 4.0.4 on 2022-05-14 17:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backoffice', '0007_videogame_e_associazioni'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='videogame',
            options={'ordering': ['titolo'], 'verbose_name': 'Videogame', 'verbose_name_plural': 'Videogame'},
        ),
    ]
