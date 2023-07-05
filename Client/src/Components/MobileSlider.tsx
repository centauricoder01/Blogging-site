import React from 'react'
import { Link } from 'react-router-dom'

const MobileSlider = () => {
    return (
        <div className='font-bold border w-4/5 m-auto flex flex-col gap-11 p-10 rounded-3xl' style={{ backgroundColor: "#293041", color: "white" }}>
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={"/"}>Contact</Link>
            <Link to={"/"}>
                <button className='p-3 bg-sky-500 rounded-full font-bold'>Signup/Login</button>
            </Link>
        </div>
    )
}

export default MobileSlider