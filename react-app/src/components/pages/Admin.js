import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Admin extends Component{

    state = {
        employee: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/admin');

        //console.log(res);

        if(res.data.status == 200 ){
            
            this.setState({
                employee: res.data.employees,
                loding: false,    
            });
        }
    }


//======================================================================

    render(){

        var employee_table = "";

        if(this.state.loding){
            employee_table = <tr><td colSpan="7"><h2>loding...</h2></td></tr>
        }else{
            employee_table = 
                this.state.employees.map( (item)=> {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.company_name}</td>
                            <td>{item.phone}</td>

                            <td>
                                <Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            </td>
                            <td>
                                <button type="submit" className="btn btn-danger btn-sm" onClick={(e)=> this.delectStudent(e, item.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                });
        }

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Admin Dashboard
                                    <Link to={'emp-register'} className="btn btn-primary btn-sm float-end">Register</Link>
                                </h4>
                            </div>

                            <div className="card-body">
                                <h2>Employee Data</h2>

                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Username</th>
                                            <th>Name</th>
                                            <th>Company Name</th>
                                            <th>Phone</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                        {employee_table}
                                    <tbody>
                                        
                                    </tbody>
                                </table>

                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;