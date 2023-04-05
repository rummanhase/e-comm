const userModel = require('../model/user.model')
const userController = {}

userController.get = async (req , res)=>{
    const data = await userModel.find();
    console.log(data);
    res.send(data)
}

userController.post = async (req , res) =>{
    const data = req.body;
    const newUser = new userModel(data)
    const reponse = await newUser.save()
    res.status(200).send({
        result:"success",
        data:reponse
    })
}

module.exports = userController;