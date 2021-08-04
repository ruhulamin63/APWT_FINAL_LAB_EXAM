import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddJob extends Component{

    state = {
        company_name:'',
        job_title:'',
        job_location:'',
        salary:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    checkAddJob = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/add-job', this.state);

        if(res.data.status === 200){
            //console.log(res.data.message);
            this.setState({
                company_name:'',
                job_title:'',
                job_location:'',
                salary:'',
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
                                <h4>Employee Dashboard
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.checkAddJob}>

                                    <div className="form-group mb-3">
                                        <lebel>Company Name</lebel>
                                        <input type="text" name="company_name" value={this.state.company_name} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Job Title</lebel>
                                        <input type="text" name="job_title" value={this.state.job_title} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Job Location</lebel>
                                        <input type="text" name="job_location" value={this.state.job_location} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Price</lebel>
                                        <input type="text" name="price" value={this.state.price} className="form-control"  onChange={this.handleInput}/>
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Add Job</button>
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

export default AddJob;