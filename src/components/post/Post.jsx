import React from 'react'
import './Post.sass'
import Avatar from '../base/avatar/Avatar'
import Button from '../base/button/Button'
import Card from '../base/card/Card'

var shareButton = [
  {
    "text": "Like",
    "icon": (
      <svg viewBox="0 0 24 24" className='h-5 w-5' >
        <path fill="currentColor" d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z" />
      </svg>
    )
  },
  {
    "text": "Comment",
    "icon": (
      <svg viewBox="0 0 24 24" className='h-5 w-5'>
        <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z" />
      </svg>
    )
  },
  {
    "text": "Share",
    "icon": (
      <svg viewBox="0 0 24 24" className='h-5 w-5'>
        <path fill="currentColor" d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z" />
      </svg>
    )
  },
  {
    "text": "Send",
    "icon": (
      <svg viewBox="0 0 24 24" className='h-5 w-5'>
        <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
      </svg>
    )
  },
]

const Post = ({ avatar, name, jobTitle, time, feed, image }) => {
  return (
    <Card>
      <div className='p-4 space-y-4'>
        <div className='flex space-x-2'>
          <Avatar
            height="h-14"
            width="w-14"
            avatar={avatar}
          />
          <div className='flex flex-col'>
            <span className='text-sm font-bold'>{name}</span>
            <span className='text-xs text-gray-600'>{jobTitle}</span>
            <span className='text-xs text-gray-600'>{time}</span>
          </div>
        </div>
        <div className='text-sm'>
          {feed}
        </div>
        <img src={image} className='w-full object-cover object-center' />
        <div className='span'></div>
        <div className='flex justify-between'>
          {
            shareButton.map((button, i) => (
              <Button
                key={i}
                text={button.text}
                type="btn--sm font-bold btn--transparent"
                icon={button.icon}
              />
            ))
          }
        </div>
      </div>
    </Card>
  )
}

export default Post