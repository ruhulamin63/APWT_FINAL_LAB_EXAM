import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component{

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

    saveRegister = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/emp-register', this.state);

        if(res.data.status === 200){
            console.log(res.data.message);
            this.setState({
                username:'',
                name:'',
                company_name:'',
                phone:'',
                password:'',
            });
        }
    }

    render(){
        return(
            <div ClassName="main-container">
                <div ClassName="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Employee Register Page
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.saveRegister}>

                                    <div className="form-group mb-3">
                                        <lebel>Username</lebel>
                                        <input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Name</lebel>
                                        <input type="text" name="name" value={this.state.name} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Phone</lebel>
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
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
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

export default Register;