import { RefreshToken, Resturant, User } from "./models";
import 'dotenv/config';

const isDev = process.env.NODE_ENV === "development"

const dbInit = () => Promise.all([
    User.sync({ alter: isDev }),
    Resturant.sync({ alter: isDev }),
    RefreshToken.sync({ alter: isDev }),
])
export default dbInit;