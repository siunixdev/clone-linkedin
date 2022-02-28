import React from 'react'
import './Header.sass'

function HeaderOption({ icon, title }) {
  return (
    <button className='header__option'>
      {icon && (
        <div className='h-6 w-6'>
          {icon}
        </div>
      )}
      <span className='mt-1'>{title}</span>
    </button>
  )
}

export default HeaderOption