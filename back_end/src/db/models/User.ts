import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { UserInterface, UserInput } from '../../common/interfaces'

class User extends Model<UserInterface, UserInput> implements UserInterface {
    public id!: number
    public email!: string
    public first_name!: string
    public last_name!: string
    public password!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'email'
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default User;