import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center cursor-pointer"
      >
        Medium
      </Link>
      <div>
        <Link to={"/Publish"}>
          <button
            type="button"
            className=" mr-8 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
          >
            Create +
          </button>
        </Link>
        <Avatar size={"big"} name="ishan" />
      </div>
    </div>
  );
};
