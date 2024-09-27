import express, { Application } from 'express';
import sequelize from '../database/connections';
import Ruser from '../routes/user';
import { User } from './user';


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
            console.log("Hola mundo por aca: "+ this.port)
        })
    }

    router(){
        this.app.use(Ruser) 
    }

    midlewares(){
        this.app.use(express.json())
    }
        

    async DBconnect(){
        try {
            await User.sync({ force: true});
            console.log("Conexion Exitosa");
        } catch (error) {
            console.log("Error de conexion: ", error);
        }
    }

}

export default Server