import { User } from "./models";
import 'dotenv/config';

const isDev = process.env.NODE_ENV === "development"

const dbInit = () => Promise.all([
    User.sync({ alter: isDev })
])
export default dbInit;