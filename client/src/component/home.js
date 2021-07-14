
import React,{Component} from 'react';


class Home extends Component{

   constructor(props){
         super (props);
         console.log("home component");

   }

    render(){
    
         return (
             <div className="container" style={{textAlign:'center',marginTop:'30vh',}}>
                 <h1 >Welcome To Products World</h1>
                 <h4>Add , Manage and view products</h4>
             </div>
         )



    }
 

}

export default Home;





