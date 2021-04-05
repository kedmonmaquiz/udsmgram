
import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('welcome')
Route.on('/login').render('auth/login')
Route.on('/signup').render('auth/signup')
Route.post('/signup','SignUpsController.index')
