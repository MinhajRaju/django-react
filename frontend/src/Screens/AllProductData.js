import React from 'react'

import store from "../store";
import { connect } from 'react-redux'
import { AllProductAction, PublishAction, DeleteAction, ManyDeleteAction, GenerateSkuAction, ProductUpdateAction } from '../Actions/ProductAction';

import Export from "react-data-table-component"
import DataTable, { ExpanderComponentProps } from "react-data-table-component";

import "react-data-table-component-extensions/dist/index.css";
import dayjs from "dayjs";
import monent from 'moment'

import Footer from '../Components/Footer';


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import moment from 'moment';

import $ from 'jquery'
import axios from 'axios';

import DataTableExtensions from "react-data-table-component-extensions";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'




const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);



const mapStateToProps = (state) => {



  console.log(state)
  return { AllProduct: state.AllproductReducer.allProductInfo }



}




export default connect(mapStateToProps)(class AllProductDataScreen extends React.Component {



  constructor(props) {

    super(props)

    this.state = {

      title: "",
      productFiltered: [],
      from: "",
      to: "",
      startDate: new Date(),
      endDate: new Date(),
      idArray: [],

      dateDrop: "disable",

      id: "",
      sign: "",
      stock: "",
      rowId: "",





    }

  }

  componentDidMount() {

    store.dispatch(AllProductAction())



  }






  titlefilter = (value) => {

    this.setState({ title: value })

    const result = this.props.AllProduct.filter(product => {
      return product.title.toLowerCase().match(this.state.title.toLowerCase())
    })
    if (value == "") {
      this.setState({ productFiltered: this.props.AllProduct })
    } else {
      this.setState({ productFiltered: result })
    }
    console.log(result)



  }



  handleSearchChange = (field) => (event) => {
    const { value } = event.target
    this.setState({
      ...this.state,
      [field]: value,


    })
    console.log(field)

    if (field == 'title') {

      this.titlefilter(value)



    }









  }

  handleSelect = (ranges) => {
    console.log(ranges);
    this.setState({ startDate: ranges.selection.startDate, endDate: ranges.selection.endDate })

    var today = ranges.selection.startDate;
    var year = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var startDate = year + "-" + mes + "-" + dia;
    console.log(startDate);


    var today2 = ranges.selection.endDate;
    var year2 = today2.getFullYear();
    var mes2 = today2.getMonth() + 1;
    var dia2 = today2.getDate();
    var endDate = year2 + "-" + mes2 + "-" + dia2;
    console.log(endDate);

    console.log(this.props.AllProduct)

    const dateresult = this.props.AllProduct.filter((data) => {
      if (dayjs(data.createdAt).isSameOrAfter(dayjs(startDate))) {

        if (dayjs(data.createdAt).isSameOrBefore(dayjs(endDate))) {
          return data
        }

      }

    });
    this.setState({ productFiltered: dateresult })



    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  event = () => {




    if (this.state.dateDrop == "disable") {

      this.setState({ dateDrop: "enable" })
    }
    if (this.state.dateDrop == "enable") {
      this.setState({ dateDrop: "disable" })

    }


  }



  handelClick = (id) => {
    console.log(id)
  }

  published = (e, id) => {




    console.log(e.target.value, id)
    console.log(e.target.checked)

    if (e.target.checked == true) {


      store.dispatch(PublishAction(id, "True"))

      toast.success("Active", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })




    }
    else if (e.target.checked == false) {
      store.dispatch(PublishAction(id, "False"))

      toast.success("Deactive", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })



    }

  }

  deleteProduct = (id) => {

    store.dispatch(DeleteAction(id)).then(() => {

      store.dispatch(AllProductAction())



    }).catch((err) => {

      console.log(err)

    })







  }
  dataTableChange = (selectableRows) => {

    const arr = []

    selectableRows.selectedRows.map((data) => {


      if (!arr.includes(data['id'])) {
        arr.push(data['id'])
      } else {
        arr.pop(data['id'])
      }





    })

    this.setState({ idArray: arr })

  }

  multiDelete = () => {

    store.dispatch(ManyDeleteAction(this.state.idArray)).then(() => {


      toast.success("Deleted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      store.dispatch(AllProductAction())


    }).catch((err) => {

      console.log(err)
    })


  }

  generateSku = () => {

    store.dispatch(GenerateSkuAction(this.state.idArray)).then(() => {


      toast.success("Generate complete", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      store.dispatch(AllProductAction())


    }).catch((err) => {

      console.log(err)
    })


  }


  handelSubmit = (e) => {
    e.preventDefault()

    store.dispatch(ProductUpdateAction(this.state.sign, this.state.stock, this.state.rowId)).then(() => {


      toast.success("Stock update", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })

      store.dispatch(AllProductAction())


    }).catch((err) => {

      console.log(err)
    })


  }





  render() {




    const columns = [
      {
        name: "Id",
        selector: "id",
        sortable: true
      },
      {
        name: "Title",
        selector: row => row.title,
        sortable: true
      },
      {
        name: "Sku",
        selector: row => row.shop_sku,
        sortable: true
      },
      {
        name: "Brand",
        selector: row => row.brand.name,
        sortable: true,

      },
      {
        name: "Qty",
        selector: row => (
          <React.Fragment>

            {row.qty < 5 ? <h3><span class="badge  badge-danger">{row.qty} Stock</span></h3> : <h3><span class="badge  badge-success">{row.qty} Stock</span></h3>}
            <button type="button" class="btn btn-rounded " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" onClick={() => this.setState({ rowId: row.id })}><FontAwesomeIcon icon={faEdit} /></button>
          </React.Fragment>
        )


        ,
        sortable: true,

      },
      {
        name: "Published",
        selector: row => (<div class="ui  slider checkbox">
          <input id="input" type="checkbox" name="newsletter"  {...row.published == "True" ? { defaultChecked: "defaultChecked" } : {}} onClick={(e) => this.published(e, row.id)} />

          <label></label>
        </div>)



      },
      {
        name: "Date",
        selector: row => row.createdAt,
        sortable: true
      },
      {
        name: "Action",
        selector: row => (
          <React.Fragment>
            <button type="button" class="btn btn-rounded" onClick={() => this.deleteProduct(row.id)} ><FontAwesomeIcon icon={faTrash} /></button>
            <button type="button" class="btn btn-rounded " onClick={() => this.editProduct(row.id)} ><FontAwesomeIcon icon={faEdit} /></button>
          </React.Fragment>
        )



      },



    ];



    const selectionRange = {


      startDate: this.state.startDate,
      endDate: this.state.endDate,
      key: 'selection',
    }










    console.log(this.state.idArray)
    const tableData = {
      columns,
      data: this.props.AllProduct
    };

    const ExpandedComponent = (suppData) => (data) => {
      console.log(data.data.id)
      const { stock } = data.data
      console.log(stock)
      return (
        <>
          <br />
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">price</th>
                <th scope="col">qty</th>
                <th scope="col">sku</th>
              </tr>
            </thead>
            <tbody>

              {stock.map((val) => {
                return (<tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.price}</td>
                  <td>{val.sku}</td>
                  <td>{val.qty}</td>

                </tr>
                )

              })}

            </tbody>
          </table>
          {data.data.id}


        </>
      );
    };

    return (



      <div className="main">

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onSubmit={this.handelSubmit}>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <select class="form-control" aria-label="Default select example" name="color" onChange={(e) => this.setState({ sign: e.target.value })}>
                      <option value="+">+</option>
                      <option value="-">-</option>

                    </select>
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Stock:</label>
                    <input type="number" class="form-control overwrite" name="price" id="inputNumber" placeholder="price" onChange={(e) => this.setState({ stock: e.target.value })} />
                  </div>
                  <button type="submit" class="btn btn-primary">submit</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

        <div>

          <DataTable
            title="Product List"
            columns={columns}
            data={this.state.productFiltered.length == 0 ? this.props.AllProduct : this.state.productFiltered}
            expandableRows={true}
            expandableRowsComponent={ExpandedComponent(this.props.AllProduct)}
            noHeader
            selectableRows
            onSelectedRowsChange={this.dataTableChange}
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
            subHeader
            dense
            subHeaderAlign="right"
            subHeaderComponent={<React.Fragment>
              <div class="form-group">
                <button type="button" class="btn btn-rounded" onClick={this.multiDelete}  ><FontAwesomeIcon icon={faTrash} /></button>
              </div>

              <div class="form-group">
                <button type="button" class="btn btn-rounded" onClick={this.generateSku}  ><FontAwesomeIcon icon={faEdit} /></button>
              </div>



              <div class="form-group">
                <input type="text" class="form-control" id="inputAddress" placeholder="Search for...." value={this.state.title}
                  onChange={this.handleSearchChange('title')} />
              </div>
              &nbsp; &nbsp; &nbsp;
              <div class="form-group">
                {this.state.dateDrop == "disable" ? (<button onClick={this.event} class="btn btn-success">Date Range </button>) :
                  (<React.Fragment>
                    <DateRangePicker
                      ranges={[selectionRange]}
                      onChange={this.handleSelect}
                      rangeColors={["#FD5B61"]}

                    />
                    <button onClick={this.event} class="btn btn-danger">Hide Range </button>
                  </React.Fragment>
                  )}

              </div>






            </React.Fragment>


            }




          />

        </div>


      </div>
    )



  }



})