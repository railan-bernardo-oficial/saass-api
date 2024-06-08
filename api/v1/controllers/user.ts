import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserController {

    // Pegar um usuário
    async getUser(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string }

        const user = await prisma.users.findUnique({
            where: {
                id: parseInt(id)
            },
            select: {
                id: true,
                user_photo: true,
                user_cover: true,
                user_name: true,
                user_username: true,
                user_about: true,
                user_location: true,
                user_email: true,
                user_password: false,
                user_token: true,
                user_phone: true,
                user_status: true
            }
        })

        if (user) {
            return reply.code(200).send(user)
        } else {
            return reply.code(404).send({ message: 'Usuário não encontrado' })
        }
    }

}

export default UserController;