import React from 'react';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import Destacado from '../components/destacado';
import Perfil from '../components/perfil';

class Badges extends React.Component{
    
    render(){

        return (
            <div style={{paddingBottom :"30px"}}>
                 <Navbar/>                                            
                            <br></br>                
                <div className="container">
                    <div className="row">                        
                        <div className="col-sm-4">
                            <div className="row">
                                <div className="col-sm-12" >                    
                                    <Perfil/>
                                </div>
                                
                                <div className="col-sm-12" >                    
                                <br></br>
                                    <Destacado/>
                                </div>
                            </div>                            
                        </div>                        
                        <div className="col-sm-8">                    
                            <BadgesList/>                                                
                        </div>
                    </div>                         
                </div>                    
            </div>
            
        );
    }
}

export default Badges; 
