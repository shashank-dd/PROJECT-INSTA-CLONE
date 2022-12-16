import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./postview.css"
function Preview(){
  const[data,setdata]=useState([])
    
    useEffect(()=>{
     fetch("http://localhost:8080/post").then((res)=>res.json()).then((res)=>{


  setdata(res.p)
     })
  //   const da=await data.json()
  //  console.log(da)
 
     
    },[])
    
    return<>

    <div className="papa">
        <nav>
        <p className="ico">instaclone</p>
     <Link to="/form"><i className="fa-solid fa-camera"></i></Link>   
        </nav>
       <div className="grandpa">
       {data&& data.map((elem,index)=>{
           return <section className="card" key={index}>
              <div className="hjk">
                <span>
                 <p className="ana">{elem.auther}</p>  
                 <p className="ana">{elem.location}</p> 
                </span>
                <span className="gh">...</span>
              </div>
            <img src={elem.image} alt="img1"/>
            <div className="likecon">
                <div id="jh">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-rocket"></i>
                </div>
                <div id="kh">2022-11-11</div>
            </div>
            
              <div>
                <p className="bn">{elem.description}</p>
              </div>

        </section>})}
       </div>
        
        
    </div>
    </>
}
export default Preview
