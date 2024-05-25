import React, { useState } from 'react';

function About(props) {
    const[name, setName] = useState();
    const[message, setMessage] = useState("Enter message");
    const[darkmodebtn, setdarkmodebtn] = useState("Enable Dark Mode");
    const[darkmode, setDarkmode] = useState({color:"#000",
    backgroundColor:"#fff"
  });
    const enableDarkMode =()=>{
      if(darkmode.color == "#000"){
        setDarkmode({color:"#fff",
        backgroundColor:"#000"
      });
      setdarkmodebtn("Enable White Mode");
      } else {
        setDarkmode({color:"#000",
        backgroundColor:"#fff"
      });
      setdarkmodebtn("Enable Dark Mode");
      }
     
    }
  const updateText = (event) =>{
    let newText = message.toUpperCase();
     setMessage(newText);
     props.showAtlert("Converted to uppercase","Success")
     setTimeout(()=>{
      props.setAlert(null);
     },
      3000
     )
     window.scrollTo({
      top:0,
      behavior:'smooth'
     })
     
  }
  const handleOnChange = (event) =>{
    setMessage(event.target.value);
 }
 const handleOnclearText = (event) =>{
  setMessage("");
}
  return (
    <>
    <div className="container-fluid bg-3 text-center m-3">    
      <h3>Enter Text to Analyze below</h3>
      <div className="row"> 
      <div className="col-sm-2"></div>  
      <div className="col-sm-8">
      <form>
          <div className="form-group">
          <label HTMLfor="formGroupExampleInput2" className="mb-3"></label>
          <textarea className="form-control" style ={darkmode} name="message" value={message} onChange ={handleOnChange} placeholder="Message"/>
          </div>
      </form>
         <button type="button" className="btn btn-primary mx-2 mt-3" onClick={updateText}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2 mt-3" onClick={handleOnclearText}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-2  mt-3" onClick={enableDarkMode}>{darkmodebtn}</button>
      <div className="container">{message.split(" ").length-1} Words {message.length} Characters</div>
      </div>
      <div className="col-sm-2"></div>
      </div>
    </div>
    </>
  );
}

export default About;
