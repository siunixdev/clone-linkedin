import React from 'react'
import './Card.sass'

function Card({ children }) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card