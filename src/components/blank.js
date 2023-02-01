import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Blank = () => {
  const navigate = useNavigate()
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <button className='p-2 bg-cherryRed rounded-md text-offWhite font-bold'  onClick={() => navigate("/")}>
          Back to login Page
        </button>
    </div>
  )
}