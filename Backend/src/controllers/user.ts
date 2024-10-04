import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import { User } from "../models/user"
import { Op } from "sequelize"
import jwt from "jsonwebtoken"

export const register = async(req: Request, res: Response) =>{

    const {name, lastname, password, email, credential} = req.body
    const passwordHash = await bcrypt.hash(password, 10)

    const user=await User.findOne({where: {[Op.or]: {email:email, credential:credential}}})

    if (user){
        return res.status(400).json({
            msg:`Email o Credencial ya existe para un usuario`
        })
    }

    try {

       await User.create({
            name: name,
            lastname: lastname,
            password: passwordHash,
            email: email,
            credential: credential,
            status: 1,
        })

        return res.json({
            msg: `User ${name} ${lastname} creado exitosamente..`
         });
        
    } catch (error) {
        res.status(400).json({
            msg:`Existe un error al querer registrar el usuario ${name} ${lastname}`
        });
    } 

   

}

export const login = async (req: Request, res: Response)=>{

    const {password, email} = req.body
    
    const user:any = await User.findOne({where: {email:email}})

    if (!user){
        return res.status(400).json({
            msg:`Usuario o Password es incorrecto`
        })
    }
    
    const passwordValid= await bcrypt.compare(password, user.password)

    if (!passwordValid){
        return res.status(400).json({
            msg:`Usuario o Password es incorrecto`
        })
    }

    const token = jwt.sign({
        email:email
    }, process.env.SECRET_KEY || 'Sincro01.Adm', {
        expiresIn: '1d' //expira el token en 1 hora
    });

    return res.json({token});


}