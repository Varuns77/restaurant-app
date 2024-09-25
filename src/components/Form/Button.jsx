import React from 'react'

const Button = ({ text}) => {
    return <button className="w-full py-3 bg-primary text-white forum font-bold focus:outline-none  mt-6 rounded-lg transition duration-300 hover:bg-primary-dark poppins ">{text}</button>
}

export default Button
