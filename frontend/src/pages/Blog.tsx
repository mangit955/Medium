import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../componenets/FullBlog";
import { Appbar } from "../componenets/Appbar";
import { Spinner } from "../componenets/Spinner";

export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });
    if(loading){
        return <div>
            <Appbar />
            <div className="h-screen flex flex-col justify-center">
               <div className="flex justify-center"> 
                  <Spinner />
                  </div>
               </div>
            </div>
               
    }
    if(!blog){
        return <div>
            Blog not found
        </div>
    }

    return <div>
        <FullBlog blog={blog} />
    </div>
}