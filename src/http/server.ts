import fastify from "fastify";
const app = fastify({ logger: true });

// Routes
import userRoutes from "../../api/v1/routes/user-routes";
import authRoutes from "../../api/v1/routes/auth-routes";

// Registrando as rotas
app.register(userRoutes, { prefix: '/api/v1' })
app.register(authRoutes, { prefix: '/api/v1' })

app.listen({
    host: '0.0.0.0',
    port: 3333
}).then(() =>{
    console.log("Server runing... 🚀")
})