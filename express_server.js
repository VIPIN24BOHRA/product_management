const express=require('express');
const cors = require('cors');
const path=require('path');
const fs=require('fs');
const exp = require('constants');


 
const app=express();
const port=process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

let file= fs.readFileSync("./product.json",{encoding:"utf-8"});
let jsonfile=JSON.parse(file);


app.get("/api/products",(req,res)=>{
    res.send(JSON.stringify(jsonfile))
   
})

app.get("/api/product",(req,res)=>{
     const id=req.query.id;
      console.log(id);
    //   res.send({"message":"hello"});
    if (id==null){
        res.send({"message":"invalid id"});
    }
     else {
    let product=jsonfile.find((obj)=>{

        return obj.id==id
     })
     if(product==undefined){
        res.send({"message":"the product with id is not present"});
    }
     else {
         res.send(JSON.stringify(product));
     }
    }
})



app.post("/api/product",(req,res)=>{
        
     req.body.id=Math.floor(Math.random()*100);
     jsonfile.push(req.body);
     fs.writeFileSync("./product.json",JSON.stringify(jsonfile));
     res.send({"message":"product added"});
  
})
 
app.delete("/api/product",(req,res)=>{
    const id= req.query.id;
    console.log(id);
   
      if (id===undefined||id===""){
               res.send({"status":0});   
       }
        else {
              jsonfile=jsonfile.filter((a)=>{
                 return a.id!=id;
                
         })
         fs.writeFileSync("./product.json",JSON.stringify(jsonfile));
         res.send({"status":1});
            }
           
})

app.put("/api/product",(req,res)=>{
     const id=req.query.id;
      if(id==undefined||id==="") {
          res.send({"message":"id is not specified"});
      }
      else {
      
        jsonfile.forEach((ele)=>{
        if(ele.id==id){

                  ele.title=req.body.title;
                  ele.description=req.body.description;
                  ele.rating=req.body.rating;
                  ele.price=req.body.price;
                  ele.type=req.body.type;
                }
            
})
    fs.writeFileSync("./product.json",JSON.stringify(jsonfile));

    res.send({"message":"product updated"});

      }
    });

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build/index.html"));
    })


app.listen(port,()=>{
    console.log("server is running on port"+ port);
})