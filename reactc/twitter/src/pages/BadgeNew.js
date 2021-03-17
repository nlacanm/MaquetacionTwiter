import React from 'react';

//import './styles/Badge.css' Froma de importat cSS
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForms from '../components/BadgeForms'

class BadgeNew extends React.Component{
    state = {form:{
        firstname: '',
        lastname: '',
        email: '',
        jobtitle: '',
        twitter: '',        
    }};
    
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    render(){
        return (
            <div>
                <div>
                  <Navbar/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <Badge 
                            firstname = {this.state.form.firstname}
                            lastname = {this.state.form.lastname}
                            trabajo = {this.state.form.jobtitle}
                            twitter= {this.state.form.twitter}
                            boton="Submit"
                            />
                        </div>
                        <div className="col-4">
                            <BadgeForms onChange={this.handleChange}  formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
              
            </div>  
        )
    }
}

export default BadgeNew;