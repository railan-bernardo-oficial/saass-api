import { FastifyRequest, FastifyReply } from 'fastify'
import jwt from 'jsonwebtoken'

class Authenticate{
    // Verifica se o usuário está autenticado
    async authenticate(request: FastifyRequest, reply: FastifyReply) {
        const token = request.headers.authorization?.replace('Bearer ', '');
    
        if (!token) {
            reply.code(401).send({ message: 'Não autorizado' });
            return;
        }

        try {
            const decoded = await verifyToken(token); 
            request.user = decoded.user;
        } catch (error) {
            reply.code(401).send({ message: 'Token de autenticação inválido' });
            return;
        }
    }
    
    }

    // Valida o token jwt
    async function verifyToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    }

export default Authenticate;