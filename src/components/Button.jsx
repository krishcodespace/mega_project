import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    className = '',
    ...props

}) => {
    // here you can show how to make button customizable for every tyupe of use usign javascript here we use ...props means another attribute usr pass then also apply with 
  return (
<button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props} >{children}</button>
    )
}

export default Button