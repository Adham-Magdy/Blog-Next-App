import Post from "@/app/modules/Post";
import connect from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async(request:any,{params}:any)=>{
    const {id} = params;

    try{
        await connect();

        const post = await Post.findById(id);

        return new NextResponse(JSON.stringify(post),{status:200});
    }catch(err){
        return new NextResponse("Data Connection Faield",{status:500});
    }


}