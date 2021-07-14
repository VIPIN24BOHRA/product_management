import React,{Component} from "react";
import "../Message.css";

class Add extends Component{

     constructor(props){
        super(props)
        console.log("this is add class");
        this.product={};

     }

     field(event,key){
            
            this.product[key]=event.target.value;
    
          
     }

     AddProduct(event){

         fetch("/api/product",{
            method:"POST",
            body:JSON.stringify(this.product),
            headers:{
               'Content-Type':'application/json'
            }
         })
         .then(res=>res.json())
         .then(data=>{

              console.log(data);
            
              let input= Array.from(event.target.parentNode.children);
              console.log(input);
              input.forEach(ele => {
                if(ele.nodeName==="INPUT"||ele.nodeName==="TEXTAREA") ele.value=null;
              });
             
              input[7].style.animation="msganmt 4s ease-out 1";
              setTimeout(()=>{
                 input[7].style.animation="";
              },4100)
              

         })

        
     }

     render(){

        return (

        <div className="container" style={{marginTop:"20px"}}>
            <h2>Add product</h2>
             <input className="form-control" type="text" placeholder="title" style={{marginTop:"20px"}} onChange={(event)=>{ this.field(event,"title")}}></input>
             <input className="form-control" type="text" placeholder="type" style={{marginTop:"20px"}}  onChange={(event)=>{ this.field(event,"type")}}></input>
             <textarea className="form-control" type="text" placeholder="description" style={{marginTop:"20px"}}  onChange={(event)=>{ this.field(event,"description")}}></textarea>
             <input className="form-control" type="Number" placeholder="price" style={{marginTop:"20px",width:"40%",display:"inline-block"}}  onChange={(event)=>{ this.field(event,"price")}}></input>
             <input className="form-control" type="Number" placeholder="rating" style={{marginTop:"20px",width:"40%",display:"inline-block",marginLeft:"20%"}}  onChange={(event)=>{ this.field(event,"rating")}}></input>
             <button className="btn btn-success" style={{marginTop:"20px",marginLeft:"89%"}} onClick={(event)=>{this.AddProduct(event)}}>Add Product</button>
             <p className="msg" >product added</p>
        </div>
              
       

        )


     }
 



}


export default Add;