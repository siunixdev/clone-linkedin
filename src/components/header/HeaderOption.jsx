import React from 'react'
import './Header.sass'

const HeaderOption = ({ icon, title, onClick }) => {
  return (
    <button
      className='header__option'
      onClick={onClick}
    >
      {icon && (
        <div className='option__icon'>
          {icon}
        </div>
      )}
      <span className='option__text'>{title}</span>
    </button>
  )
}

export default HeaderOption