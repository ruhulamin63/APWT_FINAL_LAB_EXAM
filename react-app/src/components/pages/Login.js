import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component{

    state = {
        username:'',
        password:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkLogin = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/emp-login', this.state);

        if(res.data.status === 200){
            //console.log(res.data.message);
            this.setState({
                username:'',
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
                                <h4>Employee Login Page
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.checkLogin}>

                                    <div className="form-group mb-3">
                                        <lebel>Username</lebel>
                                        <input type="text" name="username" value={this.state.username} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                   
                                    <div className="form-group mb-3">
                                        <lebel>Password</lebel>
                                        <input type="text" name="password" value={this.state.password} className="form-control"  onChange={this.handleInput}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Sign In</button>
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

export default Login;