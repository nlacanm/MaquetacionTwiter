import React from 'react';
import logo1 from '../images/riro1.png';
class perfil extends React.Component{
    
    render(){
        
        return (
            
            <div className="container py-2" >                           
                    <div className="row">
                        <div className="col-sm-12" style={{background:"#3083dc", width: "100%", position: "relative" }}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        </div>                        
                          
                        <div className="col-sm-12" style={{background:"white" }}>                                                
                            <div style={{background:"white", width: "100%", position:"relative", zindex: "1" }}>
                                <div >             
                                    <div style={{position:"absolute", zindex:"2", left:"1px", top:"1em"}} >
                                        <img   style={{position:"absolute", zindex:"3",left:"0em", top:"-63px", opacity:"1",width: "12% !important"}}  src={logo1}  alt="Logo de pagina"/>  
                                    </div>                                                           
                                    <h3 style={{paddingLeft:"110px"}}>Sherly</h3>                                    
                                    <h6 className="text-muted" style={{paddingLeft:"110px"}}>@qwertyuoi</h6>   
                                                                        
                                    <spam className="text-muted float-left px-2"><strong>TWEETS</strong></spam>
                                    <spam className="text-muted float-left px-2"><strong>FOLLOWING</strong></spam>
                                    <spam className="text-muted float-left px-2"><strong>FOLLOWERS</strong></spam>
                                    <br></br>
                                    <spam style={{color:"rgb(13, 149, 228) !important"}} className="text-muted float-left px-4">9</spam>
                                    <spam style={{color:"rgb(13, 149, 228) !important"}} className="text-muted float-left px-5">12</spam>
                                    <spam style={{color:"rgb(13, 149, 228) !important"}} className="text-muted float-left px-5">2</spam>                            
                                    
                                    
                                </div>
                                
                            </div>                                                                          
                        </div>

                        <div className="col-sm-12 py-3 " style={{background:"rgba(233, 232, 232, 0.575)", width: "100%"}}>
                            <form >
                                <input className="form-control py-3" type="text" placeholder={"Compose new Tweet..."}/>                
                            </form>
                        </div>
                    </div>
                    
            </div>      
        )
    }
}

export default perfil;