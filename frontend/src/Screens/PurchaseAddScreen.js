import React from "react";
import {connect} from 'react-redux'

import store from "../store";





import { initialstate } from "../store";
import { AllProductAction } from '../Actions/ProductAction';

import { PurchaseAddAction } from "../Actions/PurchaseAction";
import { SortOrder } from "react-data-table-component";






const mapStateToProps = (state) => {

    console.log(state)

    return { product:state.AllproductReducer.allProductInfo }
   


}






export default connect(mapStateToProps)(class PurchaseAddScreen extends React.Component{


    constructor(props){

        super(props)

        this.state = {

            product_id:"",
            sourcing_price:"",
            quantity:"",
            supplier:"",
            warehouse:"",


           
        }



    }

   
    componentDidMount(){

      
        store.dispatch(AllProductAction())
      



    }


    handleSubmit =  (e) =>{
        e.preventDefault()
        console.log("hit")

        store.dispatch(PurchaseAddAction(this.state.product_id , this.state.sourcing_price , this.state.quantity , this.state.supplier , this.state.warehouse))

    }


    grabProductId = (e) =>{

        console.log(e.target.value)



    }



 
 


  
   
   
   
   
   
    render(){

      
           
        return(
            
            <div>


   





<div class="container contact">
	<div class="row">





            
        
            
		<form className="login100-form validate-form" onSubmit={this.handleSubmit}>
		<div class="col-md-10">
			<div class="contact-form">
				
			<div class="col-sm-10">          
                  <select class="form-select" aria-label="Default select example"  onChange={(e) => this.setState({product_id:e.target.value})}>
                  <option>Select a category</option>
                    
                  {this.props.product == undefined ? 
                   null
                    
                    : (this.props.product.map((x)=>{
                           
                      if(x){
                        return <option value={x.id} >{x.title}</option>   
                    }
                        
                        

                    }))
                    
                    
                    
                    
                     }


                 
                  </select>
			</div>

        <div class="form-group">
                <label class="control-label col-sm-2" for="fname">Sourcing  Price</label>
                <div class="col-sm-10">          
                <input type="number" class="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(e)=> this.setState({sourcing_price:e.target.value})} />
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-2" for="fname">Quantity</label>
                <div class="col-sm-10">          
                <input type="number" class="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(e)=> this.setState({quantity:e.target.value})} />
                </div>
            </div>

            <div class="form-group">
                <label class="control-label col-sm-2" for="fname">Supplier</label>
                <div class="col-sm-10">          
                <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(e)=> this.setState({supplier:e.target.value})} />
                </div>
            </div>

            <div class="form-group">
				  <label class="control-label col-sm-2" for="fname">Warehouse</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" onChange={(e)=> this.setState({warehouse:e.target.value})} />
				  </div>
		    </div>
                
         
             

        <button type="submit" class="btn btn-primary mb-2">Submit</button>
        

 

				
				
			
			</div>
		</div>

    </form>
	</div>
</div>


                
            </div>



                
           


        )


    }




})