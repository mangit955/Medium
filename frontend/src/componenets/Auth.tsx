import {  signupInput } from "@manas23/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<signupInput>({
        name:"",
        username:"",
        password:""
    });

    async function sendREquest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs );
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(e){
            alert("Error signing in or signing up. Please try again.");
        }
        
    }


    return <div className=" h-screen flex justify-center flex-col">
        
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                <div className="text-3xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-400">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                    {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
            </div>
            <div className="pt-4">
            {type === "signup" ? <LabelledInput label="Name" placeholder="Manas..." onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    name: e.target.value
                })
            }} /> : null}
            <LabelledInput label="Username" placeholder="manas12@gmail.com" onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    username: e.target.value
                })
            }} />
            <LabelledInput label="Password" type = {"password"} placeholder="123456" onChange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }} />
            <button onClick={sendREquest} type="button" className="mt-8 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
                    
            </div>
              
        </div>
    </div>
}
interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;

}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType){
    return <div>
         <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={onChange} required />
        
    </div>
}