import { Router } from "express";
import controller from "./auth.controller";

/**
 *
 * define and export router
 *
 */

export const authRouter: Router = Router();

/**
 *
 * Mount endpoints
 *
 */

authRouter.post("/create-user", [middleware.createUser, controller.createUser]);
