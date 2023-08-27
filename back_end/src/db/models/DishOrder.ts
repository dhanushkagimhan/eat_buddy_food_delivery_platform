import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { DishOrderInput, DishOrderInterface } from '../../common/interfaces'
import Order from './Order'
import Dish from './Dish'

class DishOrder extends Model<DishOrderInterface, DishOrderInput> implements DishOrderInterface {
    public id!: number
    public quantity!: number
    public dish_quantity_total_price!: number
    public order_id!: number
    public dish_id!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

DishOrder.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    dish_quantity_total_price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Order,
            key: 'id'
        }
    },
    dish_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Dish,
            key: 'id'
        }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default DishOrder;