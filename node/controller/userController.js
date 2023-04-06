const { response } = require('express');
const userModel = require('../model/user.model')
const userController = {}

userController.get = async (req, res) => {
    const data = await userModel.find();
    console.log(data);
    res.send(data)
}

userController.register = async (req, res) => {
    const {name , email , password} = req.body;
    if (!name || !email || !password) {
        res.status(400).send({
            result: "failure",
            reason: "please enter user and password both"
        })
        return;
    }
    const user = await userModel.find({email})
    if(user){
        res.status(403).status({
            result: "forbidden",
            reason: "user already exists wjith this email plese login instead"
        })
    }
    const newUser = new userModel(data)
    let response = await newUser.save()
    response = response.toObject()
    delete response.password
    res.status(200).send({
        result: "success",
        data: response
    })
}

userController.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send({
            result: "failure",
            reason: "please enter user and password both"
        })
        return;
    }
    let user = await userModel.findOne({ email })
    if (user) {
        if (user.password == password) {
            let response =  await userModel.findOne({ email }).select("-password")
            res.status(202).send({
                result: "success",
                user: response
            })
            return;
        } else {
            res.status(401).send({
                result: "failure",
                reason: "Unauthorized Wrong Password"
            })
            return;
        }

    } else {
        res.status(404).send({
            result: "failure",
            reason: "No user found please register before login"
        })
        return;
    }


}


module.exports = userController;