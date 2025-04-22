import { Hono } from "hono";
import { PrismaClient } from "../generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

 
  
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECERET: string;
    }, 
    Variables: { userId : string; }
}>();

blogRouter.use("/*", async(c, next) =>{
    const authheader = c.req.header("Authorization") || "";
    const token = authheader.split(" ")[1]
    const user = await verify(token, c.env.JWT_SECERET);
    if(user) {
        c.set("userId", user.id as string);
        await next();
    }else {
        c.status(403);
        return c.json({
            message: "You are not authorized to access this resource"
        });
    }

    
})

blogRouter.post('/', async(c) => {
     const body = await c.req.json();
     const authorId = c.get("userId");
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })
    
    return c.json({
        id: blog.id
    })
  })
  
  blogRouter.put('/', async(c) => {
    const body = await c.req.json();
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

   const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data:{
            title: body.title,
            content: body.content, 
        }
    })
    
    return c.json({
        id: blog.id
    })
  })
  
   //pagination required
   blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany();

    return c.json({
        blogs
    })
  })

  blogRouter.get('/:id', async(c) => {
    const id =  c.req.param("id");
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const blog = await prisma.blog.findFirst({
            where: {
                id
            }
        })
        
        return c.json({
            blog
        });
    } catch(e) {
        c.status(411);
        return c.json({
            message: "Error while fetching blog post"
        });
    }
    
  })
  //pagination required
  blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany();

    return c.json({
        blogs
    })
  })