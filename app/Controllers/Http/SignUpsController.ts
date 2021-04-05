import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema,rules } from '@ioc:Adonis/Core/Validator'

export default class SignUpsController {
  public async index({request}:HttpContextContract){
     const validated = await request.validate({
       schema:schema.create({
            name:schema.string(),
            email:schema.string({},[
              rules.email(),
            ]),
            password:schema.string({},[
              rules.confirmed()
            ])
        }),
        messages:{
          'name.required':'Name is Required',
          'email.required':'Email is Required',
          'password.required':'Password is Required'
        }
    })
     console.log(validated)
     return request.all()
  }
}
