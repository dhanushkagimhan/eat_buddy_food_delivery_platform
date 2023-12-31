import express, { Application, Request, Response } from "express";
import cors from "cors";
import 'dotenv/config';
import router from './api/routes'
import dbInit from "./db/init";
import { checkDBConnection } from "./db/config";

const app: Application = express()
const PORT: string | number = process.env.PORT ?? 8080;

checkDBConnection()
dbInit()

const corOptions = {
    origin: "http://localhost:3000",
    methods: "GET,PATCH,POST,DELETE"
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello from API!" })
})

app.use('/v1', router)

try {
    app.listen(PORT, () => {
        console.log(`Server is listning PORT: ${PORT}`)
    })
}
catch (error: any) {
    console.log(`Error occureed: ${error.message}`)
}





