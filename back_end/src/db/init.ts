import { user } from "./models";
import 'dotenv/config';

const isDev = process.env.NODE_ENV === "development"

const dbInit = () => Promise.all([
    user.sync({ alter: isDev })
])
export default dbInit;