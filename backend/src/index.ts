import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from './generated/prisma/edge';
import {sign} from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { use } from 'hono/jsx';
import { cors } from 'hono/cors';


type Bindings = {
  DATABASE_URL: string;
  JWT_SECERET: string;
}

const app = new Hono<{Bindings: Bindings}>()

app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);





export default app
