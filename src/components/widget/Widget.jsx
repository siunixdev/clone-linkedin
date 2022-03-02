import React from 'react'
import './Widget.sass'
import Card from '../base/card/Card'
import Avatar from '../base/avatar/Avatar'
import Button from '../base/button/Button'

var footerMenus = [
  {
    "name": "About",
    "link": "/",
  },
  {
    "name": "Accessibility",
    "link": "/",
  },
  {
    "name": "Help Center",
    "link": "/",
  },
  {
    "name": "Get the linkedin App",
    "link": "/",
  },
  {
    "name": "More",
    "link": "/",
  },
]

var addUsers = [
  {
    "name": "Silvi",
    "job": "Recruiter Quishi",
  },
  {
    "name": "Alex morgan",
    "job": "Backend Developer RoseTech",
  },
  {
    "name": "Jhon Mouse",
    "job": "Owner Teknologi Nusantara",
  },
]

const Widget = () => {
  return (
    <div className='widget'>
      <Card>
        <div className='widget__user-add'>
          <span className='user-add__title'>Add to your feed</span>
          {
            addUsers.map((user, i) => (
              <div className='user-add__container'>
                <Avatar
                  height="h-14"
                  width="w-14"
                />
                <div>
                  <div className='user-add__detail'>
                    <span className='detail__name'>{user.name}</span>
                    <span className='detail__job'>{user.job}</span>
                  </div>
                  <Button
                    text="Follow"
                    type="btn btn--outline btn--xs btn--pill mt-2"
                    icon={
                      <svg viewBox="0 0 24 24" className='h-5 w-5'>
                        <path fill="currentColor" d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            ))
          }
        </div>
      </Card>
      <div className='widget__footer'>
        {
          footerMenus.map((menu, i) => (
            <div className='mb-3' key={i}>
              <a href={menu.link} className='widget__footer__link'>{menu.name}</a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Widget