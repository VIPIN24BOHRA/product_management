import React,{Component} from "react";
import {withRouter} from "react-router-dom";

class Products extends Component{


   constructor(props){
       super(props);
       
       this.state={
             products: []

       };
   }

   componentDidMount(){
 
       

        fetch("/api/products",{
          headers:{
            "accepts":"application/json"
        }
        })
        .then(res=>res.json())
        .then(  data=>{
           
            this.setState({products:data});
            
            
        })
        .catch(err=>console.log(err));
        

                    }

                  

   render() {

      let products=this.state.products.map((product,index)=>{

          return (

             
            <div className="card" key={index} style={{width:'18rem', marginLeft:"6%",marginTop:"50px"}}>
  
            <div className="card-body">
               <h5 className="card-title">{product.title}</h5>
              
              <p className="card-text">{product.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">type : {product.type}</li>
              <li className="list-group-item">price : {product.price} $</li>
              
            </ul>
            <div className="card-body">
              <button className="btn btn-success" onClick={()=>{this.props.history.push({pathname:"/view",state:{product:product}})}}>View</button>
            </div>
          </div>
          
          )

      })

      
          return (
              <div className="container" style={{marginTop:"20px"}}>
                <div className="row">
                {products}
                
                </div>
               
              </div>
          )
    
   }


};


export default withRouter(Products);