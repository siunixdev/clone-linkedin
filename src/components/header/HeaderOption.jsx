import React from 'react'
import './Header.sass'

const HeaderOption = ({ icon, title }) => {
  return (
    <button className='header__option'>
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