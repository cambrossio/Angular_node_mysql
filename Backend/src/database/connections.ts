import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api_nodejs', 'cambrossio','Fermi_Cata@02',{
    host: '127.0.0.1',
    dialect: 'mysql'
})

export default sequelize