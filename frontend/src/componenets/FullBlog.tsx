import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className=" grid grid-cols-12 px-10 w-full max-screen-xl pt-12">
                <div className="col-span-8 flex flex-col justify-center">
                    <div className="text-4xl font-extrabold ">
                    {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 20 feb 2024
                    </div>
                    <div className="pt-4 ">
                    {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size= "big" name = {blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the authors ability to grab the users attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
   
}