import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { ResturantDishCategoryInput, ResturantDishCategoryInterface } from '../../common/interfaces'
import Resturant from './Resturant'
import DishCategory from './DishCategory'

class ResturantDishCategory extends Model<ResturantDishCategoryInterface, ResturantDishCategoryInput> implements ResturantDishCategoryInterface {
    public id!: number
    public resturant_id!: number
    public dish_category_id!: number

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

ResturantDishCategory.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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

export default ResturantDishCategory;