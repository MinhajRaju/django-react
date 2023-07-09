import React from "react"

import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'




export default class SellerScreen extends React.Component {


    constructor(props) {
        super(props)

        this.state = {

            title: "",
            productFiltered: [],

        }




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
        console.log(field, value)

        if (field == 'title') {

            this.titlefilter(value)



        }


    }

    test = () => {

        console.log("test")



        localStorage.setItem("adminid", 1)

        window.open("http://localhost:3001/dashboard", '_blank');

    }





    render() {


        const columns = [
            {
                name: 'Title',
                selector: row => row.title,
            },
            {
                name: 'Year',
                selector: row => row.year,
            },
        ];

        const data = [
            {
                id: 1,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 2,
                title: 'Ghostbusters',
                year: '1984',
            },
        ]


        return (




            <div>
                <button onClick={this.test}>hello</button>
                <DataTable
                    columns={columns}
                    data={data}
                    expandableRows
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







                    </React.Fragment>}

                />

            </div>

        )





    }

}