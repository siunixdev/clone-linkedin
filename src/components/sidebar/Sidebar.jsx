import React from 'react'
import './Sidebar.sass'
import Avatar from '../base/avatar/Avatar'
import Card from '../base/card/Card'

var recents = [
  "ReactJs", "ExpressJs", "TailwindCSS", "Developer", "Working"
]

const Sidebar = ({ user }) => {
  return (
    <div className='sidebar'>
      <Card>
        <div className='sidebar__profile'>
          <Avatar
            height="h-20"
            width="w-20"
            avatar={user && user.photoURL ? user.photoURL : "/images/no-photo.png"}
          />
          <span className='profile__name h'>
            {user && user.displayName ? user.displayName : ""}
          </span>
          <span className='profile__job_title'>
            {user && user.email ? user.email : ""}
          </span>
          <div className='span'></div>
          <div className='profile__view'>
            <div className='profile__view__menu'>
              <span>Who viewed your profile</span>
              <span className='profile__count'>19</span>
            </div>
            <div className='profile__view__menu'>
              <span>Views of your post</span>
              <span className='profile__count'>72</span>
            </div>
            <div className='span'></div>
            <div className='profile__bottom'>
              <span>Try Premium for free</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className='sidebar__recent'>
          <div className='recent__title'>
            <span>Recent</span>
          </div>
          <ul className='recent__items'>
            {
              recents.map((recent, i) => (
                <li className='items__data' key={i}>
                  <span className='items__data__tag'>#</span>
                  <span>{recent}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default Sidebar