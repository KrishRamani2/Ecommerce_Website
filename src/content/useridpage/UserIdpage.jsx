import React from 'react'
import "./UserIdpage.css"
import { MdPermIdentity } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { FaRegAddressCard } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BsGenderFemale } from "react-icons/bs";
import { BsGenderMale } from "react-icons/bs";
import {Link} from "react-router-dom"
const UserIdpage = () => {
    const gender = "Female";
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to ="/newUser" style={{textDecoration:"none"}} ><button className="userAddButton">Create</button></Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais" 
                    alt="" 
                    className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Beckner</span>
                        <span className="userShowTitle">Electronics Dealer</span>
                    </div>
                </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <MdPermIdentity style={{fontSize:"25px",}} />
                            <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <SlCalender style={{fontSize:"25px"}} />
                            <span className="userShowInfoTitle">10.12.1993</span>
                        </div>
                        <div className="userShowInfo">
                            {/* <SlCalender style={{fontSize:"25px"}} /> */}
                            {gender === 'Female'?<BsGenderFemale style={{fontSize:"25px"}} />:<BsGenderMale style={{fontSize:"25px"}}/>}
                            <span className="userShowInfoTitle">{gender}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <CiPhone style={{fontSize:"25px"}} />
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <MdOutlineMail style={{fontSize:"25px"}} />
                            <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <FaRegAddressCard style={{fontSize:"25px"}} />
                            <span className="userShowInfoTitle">New York USA</span>
                        </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label >Username</label>
                            <input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Full Name</label>
                            <input type="text" placeholder='Anna Beckner' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Phone Number</label>
                            <input type="number" placeholder='+1 123 456 67' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Email</label>
                            <input type="email" placeholder='annabeck99@gmail.com' className='userUpdateInput'/>
                        </div>
                        <div className="userUpdateItem">
                            <label >Address</label>
                            <input type="text" placeholder='New York USA' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_640.jpg" alt="" className='userUpdateimg'/>
                            <label htmlFor='file' ><IoCloudUploadOutline style={{fontSize:"25px",cursor:"pointer"}}/></label>
                            <input type='file' id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserIdpage