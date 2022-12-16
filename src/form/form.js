import React, {  useState } from "react";
import {  Link } from "react-router-dom";
import axios from "axios";
import "./form.css"
 function Form(){

   const [state,setstate]=useState({ image:"",auther:"",location:"",description:""})
  //  const[pic,setpic]=useState("")
   const config ={
    headers: {
      "content-type": "multipart/form-data"
    }
  }

  const handleClick=async()=>{
    
      const newPost={
        image:state.image,
        auther:state.auther,
          location:state.location,
          description:state.description
      }

 const   data=await  axios.post("https://backebinta.onrender.com/add/user", newPost, config)
        console.log(data)
        
  }
  // async   function fop(){
        //     const form = new FormData();
        // form.append("image",state.image);
        //  form.append("upload_preset", "shashank");
  // const data =await fetch("https://api.cloudinary.com/dzzixdcs1/demo/image/upload",{
  //   method:"POST",
  //   crossorigin: true,  
  //   mode: 'no-cors',
  //   body:form
  // }).then((res)=>res.json())

  // console.log("data"+data)

  // const config={
  //   "content-type":"multipart/form-data",
  //   "Access-Control-Allow-Origin":"*"
  // };
  
  // axios.post("https://api.cloudinary.com/dzzixdcs1/demo/image/upload",form,config).then((res)=>{
  //   console.log(res)
  // })





      // console.log(1)
      //  const formdata= new FormData();
      //  formdata.append("image",state.image,state.image.name)
      //  formdata.append("auther",state.auther)
      //  formdata.append("location",state.location)
      //  formdata.append("description",state.description)
      // setpic(state.image)
      //  console.log(1)
      //  console.log(formdata,9808080)
        // try {
        //   console.log(1)
        //   const res=await axios.post("http://localhost:8080/add/user",state)
        //    if(res.status==200){
        //     console.log("added",res.data)
        //    }
        // } catch (e) {
        //   console.log(e,"err")
        // }
    //  const res=await  fetch('http://localhost:8080/add/user', {
    //     method: 'POST',
    //     headers: {
            
                
          
    //       'Content-Type': 'multipart/form-data'
              
    //       },
    //     body:  state
    //   })
    //   const t=  await res.json();
    //   console.log(t)


    //  }
// useEffect(()=>{
//     setTimeout(() => {
//         window.location.href = '/postview';
//       }, 1000);
// },[])

    return<>
        
        <div className="s"><input className="i" type="file" name="image" placeholder="No file choosen" onChange={(e)=>{ console.log(e.target.files)
            setstate({...state,image:e.target.files[0]})}}/></div>
        <div className="s">   <input type="text" name="auther"  className="i" onChange={(e)=>{setstate({...state,auther:e.target.value})}} placeholder="Auther"></input> <input name="location" onChange={(e)=>{setstate({...state,location:e.target.value})}}type="text" className="nin" placeholder="Location"></input></div>
        <div className="s"><input name="decription" onChange={(e)=>{setstate({...state,description:e.target.value})}} type="text" id="i" placeholder="Description "></input></div>
        
       
        
    <Link to="/postview"> <button onClick={handleClick} type="submit" >POST </button></Link>
  
  
    {/* <img  src={pic}>  </img> */}

    </>
}
export default Form