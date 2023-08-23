import { sequelizeConnection } from "./config";
import 'dotenv/config';

const isDev = process.env.NODE_ENV === "development"

const dbInit = async () => await sequelizeConnection.sync({ alter: isDev })

export default dbInit;