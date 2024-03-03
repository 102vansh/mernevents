const Message = require('../model/contact.model')

exports.createmessage = async(req,res) =>{
try{
const{name,email,subject,message} = req.body
const detail = await Message.create({
    name,email,subject,message
})
res.status(201).json({
    success:true,
    message:'succes is true',
    detail

})
}catch(error){
    res.status(500).json({
        success:true,
        message:'success is false'
    })
}
}