'use client'
import React from 'react'

function Button({text,bg,color}) {
  return (
    // this button is moved by left and right in position relative
    // left-[3px] top-[3px]
    <button type="button" class={` w-full h-full relative  font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 border-[1.5px] border-gray-800 ${color} `}>
      <span className={`left-[2px] border-[1px] border-gray-800 top-[2px] ${bg} absolute w-[101%] h-[105%] rounded-lg z-[-1]`}></span>
      {text}</button>
  )
}

export default Button
