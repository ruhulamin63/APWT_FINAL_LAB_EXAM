import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Employee from './Employee';

class EditEmployee extends Component{

    state = {
        username:'',
        name:'',
        company_name:'',
        phone:'',
        password:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount(){
        const employee_id = this.props.match.params.id;

        const res = await axios.get(`http://localhost:8000/api/edit-employee/${employee_id}`);

        if(res.data.status == 200){

            //console.log(employee_id);
            
            this.setState({
                username: res.data.username,
                name: res.data.name,
                company_name: res.data.company_name,
                phone: res.data.phone,
                password: res.data.password,
            });
        }
    }

    updateEmployee = async (e) =>{
        e.preventDefault();

        const employee_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-student/${employee_id}`, this.state);

        document.getElementById('updatebtn').disable = true;
        document.getElementById('updatebtn').innerText = 'Updating';
        
        if(res.data.status === 200){

            document.getElementById('updatebtn').disable = false;
            document.getElementById('updatebtn').innerText = 'Update';
        }
    }

    render(){
        return(
            <div ClassName="main-container">
                <div ClassName="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Employee
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.updateEmployee}>

                                    <div className="form-group mb-3">
                                        <lebel>User Name</lebel>
                                        <input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Name</lebel>
                                        <input type="text" name="name" value={this.state.name} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Company Name</lebel>
                                        <input type="text" name="company_name" value={this.state.company_name} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Phone</lebel>
                                        <input type="text" name="phone" value={this.state.phone} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Password</lebel>
                                        <input type="text" name="password" value={this.state.password} className="form-control"  onChange={this.handleInput}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditEmployee;