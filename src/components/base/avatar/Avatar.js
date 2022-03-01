import React from 'react'
import './avatar.sass'

function Avatar({ avatar, height, width }) {
  return (
    <img src={avatar} className={`h-${height ? height : '6'} w-${width ? width : '6'} avatar`} />
  )
}

export default Avatar