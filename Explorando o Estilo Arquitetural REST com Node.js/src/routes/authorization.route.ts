import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post("/token", (req: Request, res: Response, next: NextFunction) => {
        try {
            const authorizationHeader = req.headers["authorization"];

            if (!authorizationHeader) {
                throw new ForbiddenError("Credenciais não informadas");
            }

            const [type, token] = authorizationHeader.split(" ");

            if (type !== "Basic" || !token) {
                throw new ForbiddenError("Tipo de autenticação inválido");
            }

            res.status(StatusCodes.CREATED)
        } catch (error) {
            next(error);
        }
    }
);

export default authorizationRoute;
