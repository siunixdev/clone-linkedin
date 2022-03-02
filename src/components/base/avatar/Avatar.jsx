import React from 'react'
import './avatar.sass'

const Avatar = ({ avatar, height, width }) => {
  return (
    <img src={avatar} className={`${height} ${width} avatar`} />
  )
}

export default Avatar