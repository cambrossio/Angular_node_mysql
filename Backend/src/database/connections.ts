import { Sequelize } from "sequelize";

const sequelize = new Sequelize('api_nodejs', 'cambrossio','Fermi_Cata@02',{
    host: 'localhost',
    dialect: 'mysql'
})

export default sequelize