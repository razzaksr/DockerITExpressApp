const mongoose = require('mongoose')
const express = require('express')

// Schema >> Collection
const kycSchema = mongoose.Schema({
    account_number:{type:Number},
    account_holder:{type:String},
    account_balance:{type:Number},
    contact:{type:Number},
    email:{type:String},
})

const collection = mongoose.model('kyc',kycSchema)

mongoose.connect("mongodb://localhost:27017/mec_bank")

const app = express()
app.use(express.json())


// database operation

// insert document
app.post('/new',async(req,res)=>{
    const newDocument = new collection({
    account_number:req.body.account_number,
    account_holder:req.body.account_holder,
    account_balance:req.body.account_balance,
    contact:req.body.contact,
    email:req.body.email
    })
    const data = await newDocument.save()
    res.json(data)
})

app.get('/view',async(req,res)=>{
    const everything = await collection.find()
    res.json(everything)
})

app.get('/number/:which',async(req,res)=>{
    const few = await collection.find({account_number:req.params.which})
    res.json(few)
})


app.put('/change',async(req,res)=>{
    const tem = await collection.updateOne({_id:req.body._id},req.body,{upsert:true})
    res.json(tem)
})

app.delete('/remove/:id',async(req,res)=>{
    const temp = await collection.findByIdAndDelete(req.params.id)
    res.json(temp)
})

app.listen('1234',()=>{
    console.log('server is running!!!!!!!!!!!')
})