import React, { useRef } from 'react'
import "./profile.css"

const Profile = () => {

    const userType = useRef()

    const type = localStorage.getItem("_user_type")

    const changeUserType = () => {
        localStorage.setItem("_user_type", userType.current.value)
    }

    return <div>
        <label>User Type:</label>
        <select defaultValue={type} ref={userType}>
            <option value="1">Associate</option>
            <option value="2">Diamond</option>
        </select>
        <button onClick={changeUserType}>set Type</button>
    </div>
}

export default Profile