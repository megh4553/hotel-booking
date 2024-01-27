import express,{Request,Response} from 'express';
import User from '../models/user';
import jwt from'jsonwebtoken'

const router = express.Router();
router.post("/register", async (req:Request,res:Response)=>{
    try {
        let user = await User.findOne({
            email:req.body.email,
        });
        if(user){
            return res.status(400).json({message:"User exists"});
        }
        user = new User(req.body)
        await user.save();
        const token = jwt.sign({userId : user.id},process.env.JWT_SECRET_KEY as string);

    }   
    catch (error){
        console.log(error);
        res.status(500).send({message:"Someting went wrong"});
    }
})