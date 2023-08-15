import { DataTypes, Model } from 'sequelize'
import { sequelizeConnection } from '../config'
import { RefreshTokenInput, RefreshTokenInterface } from '../../common/interfaces'
import User from './User'

class RefreshToken extends Model<RefreshTokenInterface, RefreshTokenInput> implements RefreshTokenInterface {
    public id!: number
    public refresh_token!: string
    public access_token!: string
    public is_valid!: boolean
    public user_id!: number

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

RefreshToken.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    refresh_token: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    access_token: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_valid: {
        type: DataTypes.BOOLEAN,
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

User.hasMany(RefreshToken)
RefreshToken.belongsTo(User)

export default RefreshToken;