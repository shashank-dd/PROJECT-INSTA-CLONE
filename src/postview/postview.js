import React, { useEffect, useState } from "react";
import "./postview.css"
function Preview(){
  const[data,setdata]=useState()
    
    useEffect(()=>{
//    const res=await   fetch("https://todolistaforcousins.onrender.com/blog")
//    const t=await res.json()
//    console.log(t)
   
//    .then((res)=>{ return res.json()}).then((res)=>{
            
//          console.log(res)
//           })
          setdata([
            {"name":"Siva",
            "location":"Bengaluru",
            "likes":64,
            "description": "Legend of cricket and aslo know as captain cool",
            "PostImage":"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
            "date": "12/02/2022"
            },
            {"name":"Neeraj",
            "location":"Pune",
            "likes":30,
            "description": "he scored 100 centuries 100 times also know as god of cricket",
            "PostImage": "https://media.gettyimages.com/id/107684365/photo/south-africa-v-india-1st-test-day-4.jpg?s=1024x1024&w=gi&k=20&c=fFJZYyV_5CC-TqhZHnwXA486i289Ik1LtfbLPO9l7FE=",
            "date": "15/05/2022"
            },
            {"name":"Rahul",
            "location":"Hyderabad",
            "likes":30,
            "description":"consistency and humbleness and also known as king kohli",
             "PostImage": "https://images.hindustantimes.com/img/2022/09/10/550x309/Virat_Kohli_1662825893265_1662825895109_1662825895109.jpg",
            "date": "10/06/2022"
            }
            ])
    },[])
    
    return<>

    <div className="papa">
        <nav>
        <p className="ico">instaclone</p>
        <i className="fa-solid fa-camera"></i>
        </nav>
       <div className="grandpa">
       {data&& data.map((elem,index)=>{
           return <section className="card" key={index}>
              <div className="hjk">
                <span>
                 <p className="ana">{elem.name}</p>  
                 <p className="ana">{elem.location}</p> 
                </span>
                <span className="gh">...</span>
              </div>
            <img src={elem.PostImage} alt="img1"/>
            <div className="likecon">
                <div id="jh">
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-rocket"></i>
                </div>
                <div id="kh">{elem.date}h</div>
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
