import express, { Application, Request, Response } from "express";
import cors from "cors";
import 'dotenv/config';

const app = express()
const PORT: string | number = process.env.PORT ?? 8080;

const corOptions = {
    origin: "https://localhost",
    methods: "GET,PATCH,POST,DELETE"
}

// Middleware

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello from API!" })
})

// testing api

app.get('/', (req, res) => {
    res.json({ message: "Hello from API!" })
})



// server

try {
    app.listen(PORT, () => {
        console.log(`Server is listning PORT: ${PORT}`)
    })
}
catch (error: any) {
    console.log(`Error occureed: ${error.message}`)
}





