import React, { Component } from 'react';

import Data from './data.json';

class BadgesList extends React.Component{
    render(){
        const stilos={
            width: "12%",
            marginleft:"10px"  
        }
        return (
            <div className="container">
                <ul className="list-group">
                    <li  className="list-group-item"><h2 className="text-muted">Tweets</h2></li>
                    {Data.map((badge)=>{
                        return(
                            <li key={badge.id} className="list-group-item">
                                
                                <img className="rounded float-left px-2" style={stilos} src={badge.picture}  alt="Logo de pagina"/>
                                    
                                   <strong> {badge.firstname} {badge.lastname}</strong> <spam className="text-muted"> @{badge.twitter} - {badge.time}</spam>
                                    <br/> {badge.text}                                    
                                    <br/>                                                            
                                <div className="text-left">                                    
                                    <spam style={{marginLeft: "78px"}} className="text-muted float-left px-2">Expand</spam>
                                    <smap className="text-muted float-right px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                        </svg>
                                        More</smap>
                                    <smap className="text-muted float-right px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        Favorite</smap>
                                    <smap className="text-muted float-right px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                                        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                                        </svg>
                                        Retweet</smap>
                                    <smap className="text-muted float-right px-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                                        </svg>
                                        Reply</smap>                                    
                                </div>                                                                            
                            </li>
                        )           
                    })}
                </ul>                
            </div>            
            
        );
    }
}

export default BadgesList;