const express = require('express');
const app=express();
const config=require('./config');
const body=require('body-parser');
app.use(body.json());
var admin = require("firebase-admin");
var serviceAccount = require('./key.json');
const SinhVien = require('./SinhVien');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const database=admin.firestore()





function main(){

    app.listen(config.PORT,config.HOST,(req,res)=>{
        console.log("server dang chay")
    })
    app.get('/getAllSV',async (req,res)=>{
        const Sinhvien=database.collection('SinhVien');
        const snapshot= await Sinhvien.get();
        const listSV=[];
        if(!snapshot){
            res.send("khong co sinh vien");
        }else{
            snapshot.forEach(data=>{
                const SV= new SinhVien(
                    data.data().id,
                    data.data().name,
                    data.data().email,
                    data.data().graduated,
                )
                listSV.push(SV);
            })

        }
        res.send(listSV);



    })
    app.post('/createSV', (req,res)=>{
        try{
            const {id,name,email,graduated}=req.body;
            const data= new SinhVien(id,name,email,graduated);
            const Sinhvien=database.collection('SinhVien');
            Sinhvien.doc().set({
                id:data.id,
                name:data.name,
                email:data.email,
                graduated:data.graduated,
            })
            res.send("Tao sinh vien thanh cong");
        }catch{
            res.send("khong the tao ra sinh vien");
        }

    
    })
    app.post('/createSVform',(req,res)=>{
        res.send(req.body);
    })
}

main();