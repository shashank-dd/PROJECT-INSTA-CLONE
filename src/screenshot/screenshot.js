import React from "react";
import { Link } from "react-router-dom";
import  Src from "../images/Scr.png"
export  default   Screen=()=>{
 return<>
  
   <div className="np">
   <img  className="sd" src={Src}/>
   <div className="jk">
   <h1 className="gh">Landing Page</h1>
    <h1 id="yt">SHASHANK D D</h1>
   <div className="yg">
   <Link className="y" to="/postview"><button className="button"> Enter </button></Link>
      
       
    
   </div> 
   </div>
   </div>
     
 </>
}