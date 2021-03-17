import React from 'react';

import logo1 from '../images/logo192.png';
import logo2 from '../images/logo512.png';
//import './styles/Badge.css' Froma de importat cSS

class BadgeForms extends React.Component{
   /* state ={        };
    handleChange = e =>{
        console.log(
            {
                name: e.target.name,
                value: e.target.value,
            });
        this.setState({
            [e.target.name]: e.target.value,
        });
    };*/


    handleClick = e =>{
        console.log('Has dado click amigo!!');
    };
    handleSubmit = e =>{
        e.preventDefault();
        console.log("Deteniendo eventos");
        console.log(this.state)
    };


    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>first Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="firstname"
                            value ={this.props.formValues.firstname}>
                        </input>                        
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="lastname"
                            value = {this.props.formValues.lastname}>
                        </input>                        
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange}
                            className="form-control" 
                            type="email" 
                            name="email"
                            value={this.props.formValues.email}>
                        </input>                        
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="jobtitle"
                            value={this.props.formValues.jobtitle}>                                
                        </input>                        
                    </div>        

                    <div className="form-group">
                        <label>twitter</label>
                        <input onChange={this.props.onChange}
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValues.twitter}>                                
                        </input>                        
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>              
        )
    }
}

export default BadgeForms;