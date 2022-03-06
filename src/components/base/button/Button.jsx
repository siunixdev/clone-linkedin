import React from 'react'
import './Button.sass'

const Button = ({ text, icon, type, isLoading, onClick }) => {
  return (
    <button
      className={`btn ${type}`}
      onClick={onClick}
    >
      {
        isLoading ?
          <div className='btn__container'>
            <svg className='h-5 w-5 animate-spin' viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z" />
            </svg>
            <span className='ml-2'>Waiting...</span>
          </div>
          :
          <div className='btn__container'>
            {
              icon && (
                <div className='mr-2'>
                  {icon}
                </div>
              )
            }
            <span>{text}</span>
          </div>
      }
    </button >
  )
}

export default Button