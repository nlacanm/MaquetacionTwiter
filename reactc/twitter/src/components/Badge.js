import React from 'react';

import logo1 from '../images/logo192.png';
import logo2 from '../images/logo512.png';
//import './styles/Badge.css' Froma de importat cSS

class Badge extends React.Component{
    render(){
        return (
            
            <div className="container">
                <div>   
                    <img src={logo1} alt="Logo de pagina"/>                    
                </div> 
                
                <div>
                <img src={logo1} alt="Avatar"/>
                    <p>{this.props.firstname} <br/>{this.props.lastname}</p>
                </div> 

                <div>
                    <p>{this.props.trabajo} </p>
                    <div>@{this.props.twitter}</div>
                </div>

                <div>
                    <button className="btn btn-primary"> {this.props.boton}</button>
                </div>
            </div>      
        )
    }
}

export default Badge;