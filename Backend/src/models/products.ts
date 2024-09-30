import { DataTypes } from "sequelize";
import sequelize from "../database/connections";


export const Product = sequelize.define(
    'Product',
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.STRING, allowNull: false},
        status: {type: DataTypes.INTEGER, allowNull: false}
    }
)