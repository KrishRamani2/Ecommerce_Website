import { useEffect } from 'react'
import "./WidgetSmall.css"
import { useState } from 'react';
import { MdVisibility } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import publicRequest from '../../Requestmethod';
import { useSelector } from 'react-redux';
import axios from 'axios';
const WidgetSmall = () => {
  const [users,setUsers] = useState([]);
  let array = [] ; 
  useEffect(()=>{
    const getUsers = async () =>{
      try {
       const res = await publicRequest.get("user/?isAdmin=true");
         console.log("result"+JSON.stringify(res.data))
         setUsers(res);
         console.log(users.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getUsers();
   },[]);
   Object.keys(array).map((items)=>{
    console.log(array[items])
   })


  const [isVisible, setIsVisible] = useState(true);
  console.log("Users"+JSON.stringify(users)) ; 
  const [visibilityStates, setVisibilityStates] = useState(Array().fill(true));
  const [isAllHidden, setIsAllHidden] = useState(false);

  const handleToggleVisibility = (index) => {
    setVisibilityStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const handleHideAll = () => {
    setVisibilityStates((prevStates) => prevStates.map(() => !isAllHidden));
    setIsAllHidden(!isAllHidden);
  };
  return (
    <div className='widgetsmall'> 
    <span className="widgetSmallTitle">New Join Members
    <button className="widgetsmallbuttonhead" onClick={handleHideAll}>
          {isAllHidden ? (
            <MdVisibility style={{ fontSize: "19px" }} className='widgetMsIcon' />
          ) : (
            <BiSolidHide style={{ fontSize: "19px" }} className='widgetMsIcon' />
          )}
          {isAllHidden ? '' : ''}
        </button>
        </span>
          {visibilityStates.map((isVisible, index) => (
            
        <ul key={index} className="widgetSmallList">
          <li className={`widgetSmalllistItem ${isVisible ? '' : 'hidden'}`}>
            
            
           {array && Object.keys(array).map((key)=>{

           <div>
            <img src={users.img || "data:image/jpeg;base64,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"} 
            alt="" 
            className='widgetimg' />
            <div className={`widgetSmallUser ${isVisible ? '' : 'hidden'}`}>
              <span className="widgetSmallUsername">hello</span>
              <span className="widgetsmallusertitle">Electronics Dealer</span>
            </div>
            </div>
           })
            } 
           
           
            




            <button className="widgetsmallbutton" onClick={() => handleToggleVisibility(index)}>
              {isVisible ? (
                <MdVisibility style={{ fontSize: "19px" }} className='widgetMsIcon' />
              ) : (
                <BiSolidHide style={{ fontSize: "19px" }} className='widgetMsIcon' />
              )}
              {isVisible ? '' : ''}
            </button>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default WidgetSmall 