
const express=require("express");
const app=express();
app.use(express.json())
const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");

const JWT_SECRET="skdjnsnscm,sncnsckl";

const cors=require('cors');
app.use(cors());

const mongourl="mongodb+srv://sunkarirushi:8Cok7S5yv558COW1@cluster0.iewdwkp.mongodb.net/?retryWrites=true&w=majority";

 mongoose.connect(mongourl,{
     useNewUrlParser:true
 }).then(()=>{console.log("connected");})
 .catch(e=>console.log("error"))


app.listen(5000,()=>{
    console.log("server running");
})

app.post("/post",async (req,res)=>{
    console.log(req.body)
    const {abc}=req.body;

 
    if(abc=='123'){
        res.send({status:"ok"})
    }else{
        res.send({status:"not ok"})
    }

})

 require("./userDetails")

 const User=mongoose.model("UserInfo");

//  app.post('/register',async(req,res)=>{
//      const {name,email,mobileNo}=req.body;
//      try{
//          await User.create({
//              uname:name,
//              email,
//              phoneNo:mobileNo,
//          })
//          res.send({status:"ok"})

//      }catch(error){
//          res.send({status:"error"})

//      }
//  })

 app.post('/register',async(req,res)=>{
    const {fname,lname,email,password}=req.body;

    const encryptedPassword=await bcrypt.hash(password,10);

    try{
        const oldUser=await User.findOne({email});
        if(oldUser){
            return res.send({error:"User already exist"})
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        });
        res.send({start:"ok"})

    }catch(e){
        res.send({status:"error"})

    }


 })

 app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email})

    if(!user){
        return res.json({error:"User not found"})
    }
    if(await bcrypt.compare(password,user.password)){
        const token=jwt.sign({email:user.email},JWT_SECRET);

        if (res.status(201)){
            return res.json({status:"ok",data:token});
        }else{
            return res.json({error:"error"})
        }
    }
    res.json({status:"error",error:"Invalid password"})
 })

//  app.post("/userData",async(req,res)=>{
//     const {token}=req.body;
//     try{
//         const user=jwt.verify(token,JWT_SECRET);
//         const useremail=user.email;
//         User.findOne({email:useremail}).then((data)=>{
//             res.send({status:"ok",data:data})
//         }).catch(error)
//         {
//             res.send({status:"error",data:error})
//         }

//     }catch(e){
//         res.send({status:"error",data:error})

//     }
//  })



// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.json({ error: "User not found" });
//   }

//   if (await bcrypt.compare(password, user.password)) {
//     const payload = {
//       user: {
//         email: user.email, // You can use the user ID or any other relevant data here
//       },
//     };

//     const token = jwt.sign(payload, JWT_SECRET);

//     return res.send({ status: "ok", data: token });
//   }

//   res.json({ status: "error", error: "Invalid password" });
// });

 