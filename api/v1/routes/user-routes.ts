import { FastifyInstance, FastifyPluginOptions } from "fastify";
import UserController from "../controllers/user";
import Authenticate from "../auth/authenticate";

export default async function userRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
    const userController = new UserController();
    
    // Autenticação JWT
    const auth = new Authenticate();

    // GET user
    fastify.get('/user/:id', { preHandler: auth.authenticate } , userController.getUser.bind(userController))

}
