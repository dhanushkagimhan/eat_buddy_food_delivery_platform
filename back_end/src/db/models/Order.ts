import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import User from './User'
import { OrderInput, OrderInterface } from '../../common/interfaces'

class Order extends Model<OrderInterface, OrderInput> implements OrderInterface {
    public id!: number
    public total_price!: number
    public user_id!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Order.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    total_price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Order;