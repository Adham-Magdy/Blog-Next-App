import Post from "@/app/modules/Post";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server"

export const GET = async(request:any)=>{
    try{
        await connect();
        
        // return all posts 
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts),{status:200});
    }catch(err){
        return new NextResponse("Data Connection Failed",{status:500});
    }
}