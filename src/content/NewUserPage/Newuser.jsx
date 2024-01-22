import React from 'react'
import "./Newuser.css"
const Newuser = () => {
  return (
    <div className='user'>
        <h1 className="newUserTitle">New User</h1>
        <form  className="newUserForm">
            <div className="newUserItem">
                <label >Username</label>
                <input type='text' placeholder='john' />
            </div>
            <div className="newUserItem">
                <label >Full Name</label>
                <input type='text' placeholder='john keller' />
            </div>
            <div className="newUserItem">
                <label >Phone Number</label>
                <input type='number' placeholder='+1 123 456 7' />
            </div>
            <div className="newUserItem">
                <label >Email</label>
                <input type='email' placeholder='john@gmail.com' />
            </div>
            <div className="newUserItem">
                <label >Password</label>
                <input type='password' placeholder='' />
            </div>
            <div className="newUserItem">
                <label >Address</label>
                <input type='text' placeholder='USA' />
            </div>
            <div className="newUserItem">
            <label >Gender :-</label>
                <div className="newUserGender">
                <input type='radio' name="gender" id="Male" value="Male"  />
                <label for="Male">Male</label>
                <input type='radio' name="gender" id="Female" value="Female"  />
                <label for="Female">Female</label>
                <input type='radio' name="gender" id="Other" value="Other"  />
                <label for="Other">Other</label>
                </div>
                <button className="newUserButton">Create</button>
            </div>
            <div className="newUserItem">
            <label >Active</label>
                <select name="active" id="active"  className="newUserSelect">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
           
        </form>
    </div>
  )
}

export default Newuser