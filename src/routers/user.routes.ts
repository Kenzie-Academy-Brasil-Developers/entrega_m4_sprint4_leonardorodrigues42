import { userCreateSchema } from './../middlewares/userCreate.middleware';
import { Router } from "express";

import userCreateController from "../controllers/userCreate.controller";
import userListController from "../controllers/userList.controller";
import userPatchController from '../controllers/userPatch.controller';

import userAuthMiddleware from '../middlewares/userAuth.middleware';
import userCreateValidationMiddleware from "../middlewares/userCreate.middleware";
import userDeleteController from '../controllers/userDelete.controller';

const router = Router()

router.get("", userAuthMiddleware, userListController)
router.post("", userCreateValidationMiddleware(userCreateSchema), userCreateController)
router.patch("/:id", userAuthMiddleware, userPatchController)
router.delete("/:id", userAuthMiddleware, userDeleteController)


export default router