import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Employee from './Employee';

class Home extends Component{

    render(){

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Online Employee Management System
                                    {/* <Link to={'emp-register'} className="btn btn-primary btn-sm float-end">Register</Link> */}
                                    <Link to={'emp-login'} className="btn btn-primary btn-sm float-end">Login</Link>
                                    <Link to={'admin'} className="btn btn-primary btn-sm float-end">Admin</Link>
                                    <Link to={'employee'} className="btn btn-primary btn-sm float-end">Employee</Link>
                                </h4>
                            </div>

                            <div className="card-body">
                                <h2>Welcome to OSMS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;