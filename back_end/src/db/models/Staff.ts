import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { StaffInput, StaffInterface } from '../../common/interfaces'
import Resturant from './Resturant'

class Staff extends Model<StaffInterface, StaffInput> implements StaffInterface {
    public id!: number
    public name!: string
    public address!: string
    public phone_number!: string
    public resturant_id!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Staff.init({
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
    },
    resturant_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Resturant,
            key: 'id'
        }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Staff;