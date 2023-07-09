import React from "react";
import Header from "../Components/Header";
import SidebarLeft from "../Components/Sidebarleft";

export default class AdminScreen extends React.Component{


    render(){
        console.log(this.props.childern)

        return(
           
            <div>
                
                <Header />
          <SidebarLeft />

          <div>
            
                

                 <div class="am-mainpanel">
      <div class="am-pagetitle">
        <h5 class="am-title">Dashboard</h5>
        <form id="searchBar" class="search-bar" action="http://themepixels.me/demo/amanda/app/index.html">
          <div class="form-control-wrapper">
            <input type="search" class="form-control bd-0" placeholder="Search..." />
          </div>
          <button id="searchBtn" class="btn btn-orange"><i class="fa fa-search"></i></button>
        </form>
      </div>

      <div class="am-pagebody">


      
                {this.props.childern}
        

        

      </div>
      <div class="am-footer">
        <span>Copyright &copy;. All Rights Reserved. Amanda Responsive Bootstrap 4 Admin Dashboard.</span>
        <span>Created by: ThemePixels, Inc.</span>
      </div>
    </div>
                

                    
              
            </div>  
            </div>
        
        )


    }





} 


