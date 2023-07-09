import React from "react";
import {connect} from 'react-redux'
import { CategoryAction  , subCategoryAction  , subCategoryAction2  , BrandAction } from "../Actions/CategoryAction";
import store from "../store";
import { CKEditor } from '@ckeditor/ckeditor5-react';

import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";
import { ProductAddAction  , ColorAction} from "../Actions/ProductAction";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { initialstate } from "../store";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faTrash } from '@fortawesome/free-solid-svg-icons'





const mapStateToProps = (state) => {

    console.log(state)

    return {category:state.categoryReducer.categoryInfo , brand:state.BrandReducer.BrandInfo ,  cat_depth_one:state.subCategoryReducer.subcategoryInfo, cat_depth_two:state.subCategoryReducer2.subsubcategoryInfo , color:state.ColorReducer.allProductInfo}

   


}






export default connect(mapStateToProps)(class ProductAddScreen extends React.Component{


    constructor(props){

        super(props)

        this.state = {

            title:"",
            cat:"",
            cat_depth_one:"",
            cat_depth_two:"",
            brand:"",
            stock:[{}],
            description:"",
         
            color:[]
       
        }



    }

   
    componentDidMount(){

        store.dispatch(CategoryAction())
        store.dispatch(ColorAction())

      



    }


    changeSubCat = (e) =>{

        console.log(e.target.value)

        this.setState({cat:e.target.value})



        store.dispatch(subCategoryAction(e.target.value))
        store.dispatch(BrandAction(e.target.value))
        

    }
      
    changeSubCat2 = (e) =>{

      console.log(e.target.value)
      this.setState({cat_depth_one:e.target.value})
     
      store.dispatch(subCategoryAction2(e.target.value))
      

  }


  handelSubmit = (e)  =>{

    e.preventDefault()

    console.log("hit")
    store.dispatch(ProductAddAction(this.state.title , this.state.cat ,this.state.cat_depth_one , this.state.cat_depth_two , this.state.brand , this.state.stock))


    

  }
  removeClick(i){
    let stock = [...this.state.stock];
    stock.splice(i, 1);
    this.setState({ stock });
 }



 
  handelElement = () =>{
    console.log("something")
    this.setState(prevState =>  ({ 
    

      stock: [...prevState.stock, { }]
      
  }))


  }
  handleChange = (i, e) => {
    const { name, value } = e.target;
       
    

    let stock = [...this.state.stock];
    console.log("asdfd" ,{...stock[i]} , i)
    stock[i] = {...stock[i], [name]: value};


  
    this.setState({ stock });
 }

  addClick = (e) =>{
    console.log("hit")
    this.setState(prevState => ({ 
        stock: [...prevState.stock, { }],
        color:[...this.state.color , e.target.value]
        
    }))
}

createUI = () =>{

 

  return this.state.stock.map((el, i) =>  (

<tr>

 <td>


         


 <select class="form-control" aria-label="Default select example" name="color" onChange={(e)=>this.handleChange(i,e)}> 
                  <option>Select Brand</option>
                  {this.props.color == undefined ? 
                   null
                    
                    : (this.props.color.map((x)=>{
                           
                      if(x){
                        return <option value={x.name} >{x.name}</option>   
                    }
                        
                        

                    }))
                    
                    
                    
                    
                     }
                  </select>


     </td>
 <td>

     <input type="number" class="form-control overwrite" name="price" id="inputNumber" placeholder="price" onChange={(e)=>this.handleChange(i,e)} />
 </td>
 <td>

         <input type="number" class="form-control overwrite" name="quantity" placeholder="Quantity" onChange={(e)=>this.handleChange(i,e)}/>
 </td>
 <td>
         <input type="text" class="form-control overwrite" name="sellersku"  placeholder="Seller SKU"  onChange={(e)=> this.handleChange(i,e)}/>
     </td>
 
 <td>
 <i class="fa-thin fa-trash-plus"></i>
     <button type="button" class="btn btn-rounded btn-danger" onClick={()=> this.removeClick(i)} ><FontAwesomeIcon icon={faTrash} /></button>
 </td>
</tr>
 
    
))


}

  


  
   
   
   
   
   
    render(){

        console.log(this.state.description)

        
        console.log("ASDFSADFDS" ,this.state.cat , this.state.cat_depth_one , this.state.cat_depth_two , this.state.brand) 
       
           
        return(
            
            <div>

<div class="container">

<form onSubmit={this.handelSubmit}>
<div class="card" >
  <div class="card-header">
    Basic Information
  </div>
  <div class="card-body">
 
  <div class="form-group">
    <label for="inputAddress">Product name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="@eg-name" onChange={(e)=> this.setState({title:e.target.value})} />
  </div>
  
  <div class="form-row">
    
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control" onChange={this.changeSubCat}>
        <option selected>Choose...</option>
        {this.props.category == undefined ? 
                      null
                    
                    
                    : (this.props.category.map((x)=>{
                            
                        if(x.level == 0){
                            return <option value={x.id} >{x.name}</option>   
                        }                        

                    }))                
                    
                    
                    
                     }
      </select>    
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control"  onChange={this.changeSubCat2}>
        <option selected>Choose...</option>
        {this.props.cat_depth_one == undefined ? 
                    null
                    
                    
                    : (this.props.cat_depth_one.map((x)=>{
                            
                        if(x.level == 1){
                            return <option value={x.id} >{x.name}</option>   
                        }
                        

                    }))
                    
                    
                    
                    
                     }
      </select>    
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control" onChange={(e) => this.setState({cat_depth_two:e.target.value})}>
        <option selected>Choose...</option>
        {this.props.cat_depth_two == undefined ? 
                   null
                    
                    : (this.props.cat_depth_two.map((x)=>{
                            
                        if(x.level == 2){
                            return <option value={x.id} >{x.name}</option>   
                        }
                        

                    }))
                    
                    
                    
                    
                     }
      </select>    
    </div>

    <div class="form-group col-md-4">
    
      <label for="inputState">Brand</label>
      <select id="inputState" class="form-control" onChange={(e) => this.setState({brand:e.target.value})}>
        <option selected>Choose...</option>
        {this.props.brand == undefined ? 
                   null
                    
                    : (this.props.brand.map((x)=>{
                           
                      if(x){
                        return <option value={x.id} >{x.name}</option>   
                    }
                        
                        

                    }))
                    
                    
                    
                    
                     }
      </select>    
    </div>

   
  </div>

 
  

  </div>


</div>
<br/><br/>
<div class="card">
  <div class="card-header">
    Detail Information
  </div>
  <div class="card-body">
  <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"                       
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            this.setState({description:data}) ;
                        } }
                       
                    />
  </div>
  
</div>

<br/><br/>
<div class="card">
  <div class="card-header">
    Price And Stock
  </div>
  <div class="card-body">
   
  <button class="btn btn-primary" onClick={this.addClick}>Add New Sku</button>
  <br/><br/>
  <table class="table table-bordered">
                                        <thead class="thead-light">
                                            <tr>
                                                <th scope="col">Color Family</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">SellerSKU</th>                                            
                                              
                                                
                                                
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                            {this.createUI()}
                                            
                                        </tbody>
                                    </table>  

  </div>
  
</div>




<br/><br/>
<div class="card">
  <div class="card-header">
    Service & Delivery
  </div>
  <div class="card-body">
  <h3>Services</h3>
  <div class="form-row">
   
    <div class="form-group col-md-4">
      <label for="inputState">Warrenty Type</label>
      <select id="inputState" class="form-control" onChange>
        <option selected>Choose...</option>
        <option selected value="seller warrenty">Seller Warrenty</option>
        <option selected value="brand warrenty" >Brand Warrenty</option>
        
      </select>    
    </div>

    <div class="form-group col-md-4">
      <label for="inputState">Warrenty </label>
      <select id="inputState" class="form-control" onChange>
        <option selected>Choose...</option>
        <option selected value="1 Month">1 Month</option>
        <option selected value="2 Month">2 Month</option>
        <option selected value="3 Month">3 Month</option>
        <option selected value="4 Month">4 Month</option>
        <option selected value="5 Month">5 Month</option>
        <option selected value="6 Month">6 Month</option>
        <option selected value="7 Month">7 Month</option>
        <option selected value="8 Month">8 Month</option>
        <option selected value="9 Month">9 Month</option>
        <option selected value="10 Month">10 Month</option>
        <option selected value="11 Month">11 Month</option>
        <option selected value="12 Month">12 Month</option>
        <option selected value="Life Time">Life Time</option>      
        
      </select>    
    </div>                    
  </div>

  <br/><br/>
    <h3>Delivery</h3>
    <div class="form-row">
    <div class="form-group col-md-4">
    <label for="inputAddress">Package Weight</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="@eg-name"  />
  </div>    
  </div>

  <div class="form-row">
    <div class="form-group col-md-4">
    <label for="inputAddress">Package Dimension</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="length"  />
  </div>  
  <div class="form-group col-md-4">
  <label for="inputAddress">&nbsp;</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="width"  />
  </div>   
  <div class="form-group col-md-4">
  <label for="inputAddress">&nbsp;</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="height"  />
  </div>     
  </div>
   
 
  </div>
  
</div>




<button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>



</div>
           


                
           


        )


    }




})