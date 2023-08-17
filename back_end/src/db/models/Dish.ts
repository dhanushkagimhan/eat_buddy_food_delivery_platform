import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import Resturant from './Resturant'
import { DishInput, DishInterface } from '../../common/interfaces'
import DishCategory from './DishCategory'

class Dish extends Model<DishInterface, DishInput> implements DishInterface {
    public id!: number
    public name!: string
    public rate!: number
    public price!: number
    public resturant_id!: number
    public dish_category_id!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Dish.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    resturant_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: Resturant,
            key: 'id'
        }
    },
    dish_category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
            model: DishCategory,
            key: 'id'
        }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Dish;