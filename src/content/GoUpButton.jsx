import React, { useEffect, useState } from 'react';

const GoUpButton = () => {
  const [backTotop,setBackTotop]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100 ){
        setBackTotop(true);
      }else{
        setBackTotop(false);
      }
    })
  },[])

  const goToTop = () => {
    window.scrollTo({ 
      top: 0, 
      left:0,
      behavior: "smooth"
    });
    console.log("Scrolling to the top");
  };

  return (
    <div className="top-btn" >
     {backTotop && (
      <button style={{position:"fixed",bottom:"50px",right:"50px",height:"50px",width:"50px",fontSize:"50px"
    }}>^Hello</button>
     ) }
    </div>
  );
};

export default GoUpButton;
