import express, { Application } from 'express';
import Ruser from '../routes/user';
import RProduct from '../routes/products'
import { User } from './user';
import { Product } from './products';
import cors from 'cors';


class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app=express();
        this.port= process.env.PORT || '3017'; //si es null lo fuerza al 3016
        this.listen();
        this.midlewares();
        this.router();
        this.DBconnect();

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("Puerto: "+ this.port)
        })
    }

    router(){
        this.app.use(Ruser) 
        this.app.use(RProduct) 
    }

    midlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
        

    async DBconnect(){
        try {
            await User.sync();
            await Product.sync();
            console.log("Conexion Exitosa");
        } catch (error) {
            console.log("Error de conexion: ", error);
        }
    }

}


export default Server