import React from "react";
import Axios from "axios"
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [URL,SetURL]=useState("")
  const [URL1,ShowURL]=useState("")
  const handlechange=(e)=>{
    SetURL(e.target.value)
  }
  const handleclick = async()=>{
    try {
      
      const SURL=await axios.post("http://localhost:3000/url/sent",{
        "LURL":URL
      })
      ShowURL(SURL.data.URL)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col gap-y-4">
          <div className="text-3xl font-bold ml-15">Your Links Just Got A Haircut.😅</div>
          <div className="flex gap-x-1">
            <input
              type="text"
              placeholder="Enter Your Long URL"
              onChange={handlechange}
              className="input placeholder-white rounded-md text-white shadow-xl/30 w-lg"
            />
            <button className="btn" onClick={()=>handleclick()}>Get Your URL </button>
          </div>
          <div className="text-2xl mt-4 ml-64 font-mono">{URL1}</div>
        </div>
      </div>
    </>
  );
};

export default App;
