const express=require('express');
const app=express();
app.use(express.json());
const port=8000;


app.get('/',(req,res)=>{
    return res.send('Helloo!')
})

app.post('/signup',async (req,res)=>{
    const {userName, email, password, dateOfBirth}=req.body;
    if(!userName){
        return res.json({message: 'Usermane cannot be empty'});
    }
    else if(!email){
        return res.json({message: 'Email cannot be empty'});
    }
    else if(password<8 || password>16){
        return res.json({message: 'Password should be greater than 8 or less than or equal to 16'});
    }
    try {
        if(userName && email && password){
            const signUp=req.body;
            const sign= await signUp.save();
            return res.json({message: 'Signup successful', data: sign});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
})

app.listen(port, ()=>{
    console.log(`port is listening in http://localhost:${port}`);
})