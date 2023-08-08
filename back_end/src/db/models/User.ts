import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { UserInterface, UserInput } from '../../common/interfaces'
import * as bcrypt from 'bcrypt';

class User extends Model<UserInterface, UserInput> implements UserInterface {
    public id!: number
    public email!: string
    public first_name!: string
    public last_name!: string
    public password!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

// const getHashPassword = async (password: string) => {
//     const saltRound = 8
//     console.log('password ', password)
//     try {
//         const hashPassword: string = await bcrypt.hash(password, saltRound)
//         console.log('hashPassword ', hashPassword)
//         return hashPassword;
//     } catch (error) {
//         console.log(`encryption error : ${error}`);
//     }
// }

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
        allowNull: false,
        // set(value: string) {
        //     return getHashPassword(value)
        // }
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default User;