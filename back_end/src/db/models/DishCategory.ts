import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { DishCategoryInput, DishCategoryInterface } from '../../common/interfaces'

class DishCategory extends Model<DishCategoryInterface, DishCategoryInput> implements DishCategoryInterface {
    public id!: number
    public name!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

DishCategory.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default DishCategory;