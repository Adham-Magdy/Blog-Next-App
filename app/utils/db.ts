import mongoose from "mongoose"

const connect = async()=>{
    try{
        await mongoose.connect("mongodb+srv://next-blog:adham..13.9@cluster0.iqfxyyj.mongodb.net/blogDB?retryWrites=true&w=majority");
    }catch(error){
        throw new Error("Failed To Connect");
    }
}

export default connect;