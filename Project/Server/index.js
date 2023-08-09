const express = require('express');
const cors= require('cors');
const bodyparser =require('body-parser');
const mysql =require('mysql2');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))

// Database connection

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'jaswanth',
    database:'project'
})

// ------------------------------

// Create

app.post('/create',(req,res)=>{
   const userdetails = req.body
    const query= 'INSERT INTO userdetails (Name,Email,Password,contact) VALUES (?,?,?,?) ';
  db.query(query,[userdetails.name,userdetails.email,userdetails.password,userdetails.contact],(err,result)=>{
    if(err){
      console.log(err);
    }
    console.log(result);
    
 })
   })

// -----------------------------

// Get data

app.get('/get',(req,res)=>{
   const selqurey ="SELECT * FROM userdetails" 
    db.query(selqurey,(err,result)=>{
      if(err){
        console.log(err);
      }
      res.send(result);
})

})  

//------------------------------

//Delete data

app.delete('/remove/:id',(req,res)=>{
  const {id} = req.params
   const queryremove= 'DELETE FROM userdetails WHERE id = ? ';
    db.query(queryremove,id,(err,result)=>{
     console.log(err);
     console.log(result);
})
  })

  //------------------------

  //Update

  app.get('/get/:id',(req,res)=>{
    const {id}=req.params
    const selqurey ="SELECT * FROM userdetails WHERE id=? " 
     db.query(selqurey,id,(err,result)=>{
      if(err){
        console.log(err);
      }
       res.send(result);
 })
 
 }) 
 app.put('/update/:id',(req,res)=>{
  const {id} = req.params
  const userdetails = req.body
   const queryupdate= 'UPDATE userdetails SET Name =?,Email=?,Password=?,contact=? WHERE id = ? ';
    db.query(queryupdate,[userdetails.name,userdetails.email,userdetails.password,userdetails.contact,id],(err,result)=>{
      if(err){
        console.log(err);
      }
     console.log(result);
})
  })

  //-------------------------------
app.listen(3000)