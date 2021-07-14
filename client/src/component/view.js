import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import './view.css';
import Fullimage from "../utilities/full_star.png";
import Emptyimage from "../utilities/empty_star.png";
import Halfimage from "../utilities/half_star.png";


class View extends Component{

     constructor(props){
         super(props);
         console.log("this is view component");
         this.product=this.props.location.state.product;
         this.rating=Math.floor(this.product.rating);
         this.decimal=this.product.rating-this.rating;
          this.images=[];
         for(let i=1;i<=5;i++){
            if(i<=this.rating) this.images.push(Fullimage);
            else if(this.decimal) {
                 this.images.push(Halfimage)
                this.decimal=0;
               }
            else  this.images.push(Emptyimage);
        }
         this.images.forEach(element => {
             console.log(element);
         });
     }

      

        render(){
             
             let str=this.images.map(ele=>{
                 return (
                     <img src={ele} alt="" style={{width:"30px"}}/>
                 )
             })
             
          
            return (
                <div className="container">
                  
                  <div className="product">
                    <p className="name">{this.product.title}</p>
                    <p className="description">Description : <br/>{this.product.description}</p>
                    <p className="type"> {this.product.type}</p>
                    <p className="price">{this.product.price} $ </p>
                    <p className="rating">{str}</p>
                    </div>
                    </div>
            )
        }


  


}

export default withRouter(View);