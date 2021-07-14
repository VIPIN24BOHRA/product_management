import React,{Component} from 'react';



class ManageProducts extends Component {
        
    constructor(props){

        super(props);
        console.log("this is constructor of manage component");

        this.state={

            students :[]
        }
    }
  

     componentDidMount(){
         
        fetch("/api/products")
        .then(res=>res.json())
        .then(data=>{
            this.setState({students:data})
        })      


     }

     Update(event,id){

           let name= event.target.innerText;

            if(name==="Update"){
                event.target.className="btn btn-success";
                event.target.innerText="Save ";
                event.target.parentNode.parentNode.childNodes.forEach((ele)=>{
                   if(ele.childNodes[0].nodeName!=="BUTTON") ele.contentEditable="true";
                })


            }

            else {
                
                let list= event.target.parentNode.parentNode.childNodes;
                //   obj.title=list[0].innerText;
                //   obj.type=list[1].innerText;
                //   obj.rating=Number(list[2].innerText);
                //   obj.description=list[3].innerText;
                //   obj.price=Number(list[4].innerText);
                  
                  fetch("/api/product?id="+id,{
                      method:"PUT",
                      body:JSON.stringify({
                          title:list[0].innerText,
                          type:list[1].innerText,
                          rating:Number(list[2].innerText),
                          description:list[3].innerText,
                          price:Number(list[4].innerText)
                      }),
                      headers:{
                          'Content-Type':'application/json'
                      },
                      
                  })
                  .then(res=>res.json())
                  .then(data=>{

                     console.log(data);
                     event.target.innerText="Update";
                     event.target.className="btn btn-primary";

                  })
                  
                 


            }




     }


     Delete (event,id){

       fetch("/api/product?id="+id,{
           method:"DELETE",
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              event.target.parentNode.parentNode.style.display="none";
          })

     }




    render(){


         let students = this.state.students.map((student)=>{

                 return (
                        <tr>
                        <td style={{width:"15%"}}> {student.title}</td>
                        <td>{student.type}</td>
                        <td>{student.rating}</td>
                        <td style={{width:"40%"}}>{student.description}</td>
                        <td>{student.price}</td>
                        <td><button  className="btn btn-primary" style={{marginRight:"5%"}} onClick={(event)=>{this.Update(event,student.id)}}>Update</button>
                        <button  className="btn btn-danger" onClick={(event)=>{this.Delete(event,student.id)}}>Delete</button></td>
                        </tr>

                 )

         })

        return (
            <div className="container">
                <h1 style={{marginTop:"25px",marginBottom:"40px"}}>Manage product details</h1>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th>Price in $</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students}

                    </tbody>

                </table>
                
            </div>
        )
    }


}

export default ManageProducts;