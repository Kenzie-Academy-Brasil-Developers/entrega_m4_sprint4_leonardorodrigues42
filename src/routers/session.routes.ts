import { Router } from "express";
import userLoginController from "../controllers/userLogin.controller";

const sessionRouter = Router()

sessionRouter.post("", userLoginController)

export default sessionRouter