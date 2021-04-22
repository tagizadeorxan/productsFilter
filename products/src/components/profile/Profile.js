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
        <select ref={userType}>
            <option selected={type === "1" ? true : false} value="1">Associate</option>
            <option selected={type === "2" ? true : false} value="2">Diamond</option>
        </select>
        <button onClick={changeUserType}>set Type</button>
    </div>
}

export default Profile