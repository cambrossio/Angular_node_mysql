import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";


const validateToken = (req: Request, res: Response, next: NextFunction)=>{
    const headersToken = req.headers['authorization']

    if(headersToken != undefined && headersToken.startsWith('Bearer ')){
        try {
            const token= headersToken.slice(7)
            jwt.verify(token, process.env.SECRET_KEY || "Sincro01.Adm")
            next()    
        } catch (error) {
            res.status(401).json({
                msg:`Se ha expirado el tiempo de inicio de sesion`
            })
        }
        
    }else{
        res.status(401).json({
            msg:`Acceso denegado`
        })
    }
    
    

}

export default validateToken