import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { ResturantInput, ResturantInterface } from '../../common/interfaces'

class Resturant extends Model<ResturantInterface, ResturantInput> implements ResturantInterface {
    public id!: number
    public name!: string
    public address!: string
    public phone_number!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Resturant.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Resturant;