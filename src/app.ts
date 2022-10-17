import "reflect-metadata"
import "express-async-errors"
import express, { Request, Response } from "express"
import router from "./routers/user.routes"
import sessionRouter from "./routers/session.routes"
import handleErrorMiddleware from "./middlewares/handleError.middleware"

const app = express()

app.use(express.json())

app.use("/users", router)
app.use("/login", sessionRouter)

app.use(handleErrorMiddleware)

app.get("/", (req: Request, res: Response)=> {
    res.status(200).send('Hello Docker')
})

export default app