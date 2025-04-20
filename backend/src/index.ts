import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/edge';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  }
}>()

app.post('/api/v1/user/signup', async(c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{
  await prisma.user.create({
    data:{
      username: body.username,
      password: body.password,
      name: body.name
    }
  })

  return c.text('User signed up successfully!')
} catch(e){
  console.log(e);
  c.status(411);
  return c.text(' Invalid request !')
}
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('User signed in successfully!')
})

app.post('/api/v1//blog', (c) => {
  return c.text('User blog created successfully!')
})

app.put('/api/v1/user/blog', (c) => {
  return c.text('User blog updated successfully!')
})

app.get('/api/v1/user/bulk', (c) => {
  return c.text('User bulk data retrieved successfully!')
})

app.get('/api/v1/user/blog/:id', (c) => {
  return c.text('User blog retrieved successfully!')
})

export default app
