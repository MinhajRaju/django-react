import React from 'react'
import store from "../store";
import {connect} from 'react-redux'
import { AllProductAction } from '../Actions/ProductAction';

import Export from "react-data-table-component"
import DataTable from "react-data-table-component";

import "react-data-table-component-extensions/dist/index.css";
import dayjs from "dayjs";
import monent from 'moment'


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';

import $ from 'jquery'
import axios from 'axios';

import DataTableExtensions from "react-data-table-component-extensions";




const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);



const mapStateToProps  = (state) =>{

   

    console.log(state)
    return {AllProduct:state.AllproductReducer.allProductInfo}



}


export default connect(mapStateToProps)(class AllProductDataScreen extends React.Component{


    
    constructor(props){

        super(props)

        this.state  = {

            title:"",
            productFiltered:[],
            from:"",
            to:"",
            startDate : new Date(),
            endDate: new Date(),


            dateDrop:"disable",

            id:"",



        }

    }

    componentDidMount(){

        store.dispatch(AllProductAction())
       


  }
 



    datefilter  = ( value , field) =>{
        const dateresult = this.props.AllProduct.filter((product) => {
            if (field === "from" && dayjs(product.createdAt).isSame(dayjs(value))) {
              return  product            
              
            }  

          });       
          this.setState({productFiltered:dateresult})
    }

    titlefilter  = (value) => {

        this.setState({title:value}) 

            const result  = this.props.AllProduct.filter(product =>{
                return product.title.toLowerCase().match(this.state.title.toLowerCase())
            })
            if(value == ""){
                this.setState({productFiltered:this.props.AllProduct})
            }else{
                this.setState({productFiltered:result})
            }
            console.log(result)



    }



    handleSearchChange = (field) => (event) =>{
        const { value } = event.target
        this.setState({
            ...this.state,
            [field]:value,


        })
        console.log(field)

        if(field == 'title'){

            this.titlefilter(value)
            
    
            
        }
        if(field == "from"){
            this.datefilter(value , field)
         
        }



       




      
    }  

    handleSelect = (ranges) => {
        console.log(ranges);
        this.setState({startDate:ranges.selection.startDate ,endDate:ranges.selection.endDate})
        
        var today = ranges.selection.startDate;
        var year = today.getFullYear();
        var mes = today.getMonth()+1;
        var dia = today.getDate();
        var startDate =year+"-"+mes+"-"+dia;
        console.log(startDate);


        var today2 = ranges.selection.endDate;
        var year2 = today2.getFullYear();
        var mes2 = today2.getMonth()+1;
        var dia2 = today2.getDate();
        var endDate =year2+"-"+mes2+"-"+dia2;
        console.log(endDate);

        const dateresult = this.props.AllProduct.filter((product) => {
            if (dayjs(product.createdAt).isSameOrAfter(dayjs(startDate))) {
                
                if(dayjs(product.createdAt).isSameOrBefore(dayjs(endDate))){
                    return product
                }
              
            }  

          });       
          this.setState({productFiltered:dateresult})
        


        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }

      event = () => {

       


        if(this.state.dateDrop == "disable"){
        
            this.setState({dateDrop:"enable"})
        }
        if(this.state.dateDrop == "enable"){
            this.setState({dateDrop:"disable"})
            
        }
            

      }


     
      handelClick = (id) =>{
          console.log(id)
      }
     
    




    render(){

      
    

        const columns = [
            {
              name: "Id",
              selector: "id",
              sortable: true
            },
            {
              name: "Title",
              selector: "title",
              sortable: true
            },
            {
              name: "Brand",
              selector: row=> row.brand.name,
              sortable: true,
             
            },
            {
              name: "Date",
              selector: "createdAt",
              sortable: true
            }];
       


          const selectionRange = {

          
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            key: 'selection',
          }

        
 
                   
      

         
      


        console.log(this.props.AllProduct , this.state.from )
        const tableData = {
            columns,
            data:this.props.AllProduct
          };
        
        return(
            
            <div>
              

            <div className="main">
           
               
                    <DataTable
                    title="Product List"
                    columns={columns}
                    data={this.state.productFiltered.length == 0 ? this.props.AllProduct : this.state.productFiltered}
                   
                    noHeader
                    selectableRows
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    subHeader
                    dense
                    subHeaderComponent={ <React.Fragment><input 
                        type="text" 
                        placeholder="Search here" 
                        className="w-15 form control" 
                        value={this.state.title}
                        onChange={this.handleSearchChange('title')}
                        />
                       
                        <input
                        placeholder="From" 
                        type="date"
                        className="w-15 form control"
                        id="from"
                        value={this.state.from}
                        onChange={this.handleSearchChange('from')}

                        
                       
                    
                      />

                    
                    {this.state.dateDrop == "disable" ?(<button onClick={this.event}>Date Range </button>)  : 
                    ( <React.Fragment>
                        <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={this.handleSelect}                        
                        rangeColors={["#FD5B61"]}
                        
                    />
                    <button onClick={this.event}>Hide Range </button> 
                    </React.Fragment>
                    )
                      
               }
                   
                  
                     
                  
                      </React.Fragment>
                        
                    
                    }
                   

                

                    />
           
                </div>


            </div>
        )

        

    }



})