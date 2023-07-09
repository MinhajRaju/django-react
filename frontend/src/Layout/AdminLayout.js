import React from "react";
import Header from "../Components/Header";
import SidebarLeft from "../Components/Sidebarleft";

export default class AdminScreen extends React.Component{


    render(){
        console.log("adsfasdfasdfsadfsadf" , this.props.children)

        return(
           
           <div>
                    <div id="wrapper">
                       <Header />
                       <div id="content-wrapper" className="d-flex flex-column">

                       <div id="content">

                        <SidebarLeft />

<div className="container-fluid">




  {this.props.children}
   
    

</div>


</div>

        

                 
                      
          
      </div>
      
            
                
                </div></div>
        )


    }





}