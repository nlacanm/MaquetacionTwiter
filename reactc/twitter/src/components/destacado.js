import React from 'react';

class destacado extends React.Component{
    state={
        data:[
            {
                "id":1,
                "text":"#NoticiasGuatemaal"
            },
            {
                "id":2,
                "text":"#ChampionsLige"
            },
            {
                "id":3,
                "text":"#TodosLosGanadores"
            },
            {
                "id":4,
                "text":"#MRliveqweryy"
            },
            {
                "id":5,
                "text":"Guate VRS Cuba"
            },
            {
                "id":6,
                "text":"Latinoamerica 100"
            }          
        ]
    }
    render(){
        const colorr={
            background:"white",
            color:"rgb(13, 149, 228)"
        }
        
        return (
            
            <div className="container py-2" style={colorr}>                           
                    <p>
                        <spam className="mx-1 h3">                    
                            <h3 className="text-muted float-left px-2">Trends</h3>                    
                        </spam>
                        <spam>- Change</spam>                
                    </p>                                
                                   
                        {this.state.data.map((badge)=>{
                            return(                 
                                <p  key={badge.id} >
                                    {badge.text}                    
                                </p>                                               
                            )
                        })}                           
            </div>      
        )
    }
}

export default destacado;