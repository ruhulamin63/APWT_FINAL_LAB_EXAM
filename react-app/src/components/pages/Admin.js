import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Admin extends Component{

    render(){

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
                                <h2>Hello , Admin</h2>
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