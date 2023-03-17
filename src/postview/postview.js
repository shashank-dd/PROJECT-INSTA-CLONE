import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./postview.css"
function Preview(){
  const navigate=useNavigate()
  const[data,setdata]=useState([])
  const[co,setco]=useState(1)
  const[tog,settog]=useState(false)
    
    useEffect(()=>{
      console.log("wait")
      settog((t)=>{ return !t})
     fetch("https://instaclonfrontendk.onrender.com/post/post").then((res)=>res.json()).then((res)=>{

console.log(res.p)

  setdata(res.p)
     }).finally(()=>{
      settog((t)=>{ return !t})
     })
  //   const da=await data.json()
  //  console.log(da)
 
 
    },[co])
  //   function fop(d){
  // //https://backebinta.onrender.com
  //     fetch(`http://localhost:8080/delete/?auther=${d}`, {
  //       method: 'DELETE',
      
  //       //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
  //     }).then((res)=>{res.json()}).then((res)=>{
  //       console.log(res)
  //     })
  //   }
    
    return<>
{tog?<div className="lds-hourglass"></div>:null}
    <div className="papa">
        <nav>
        <p className="ico">instaclone</p>
        <Link to="/postview"><p onClick={()=>{
          setco((p)=>p+1)
        }}>Refresh</p> </Link>   
     <Link to="/form"><i className="fa-solid fa-camera"></i></Link>   
        </nav>
       <div className="grandpa">
       {data&& data.map((elem,index)=>{
           return <section className="card" key={index+elem}>
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
              <div>
                <button id="de"  onClick={async()=>{
                  settog((t)=>{ return !t})
               let d=   await  fetch(`https://instaclonfrontendk.onrender.com/post/delete/?_id=${elem._id}`, {
                      method: 'DELETE',
                   
                    
                      //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
                    })
                 d= await d.json()  
                 settog((t)=>{ return !t})
  console.log(d)
  if(d.k=="deleted"){
    console.log(99)
    setco((p)=>p+1)
  }

                    // .then((res)=>{res.json()}).then((res)=>{
                    //   console.log(res.k)
                    //   if(res.k=="deleted"){
                    //     navigate("/postview")
                    //   }
                    // })

}}>delete</button>
              </div>

        </section>})}
       </div>
        
        
    </div>
    </>
}
export default Preview
