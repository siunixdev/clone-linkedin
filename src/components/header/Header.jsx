import React from 'react'
import './Header.sass'
import Logo from './images/logo.svg'
import IconSearch from './images/icon-search.svg'
import HeaderOption from './HeaderOption'
import Avatar from '../base/avatar/Avatar'

var menus = [
  {
    "title": "Home",
    "icon": (
      <svg viewBox='0 0 24 24'>
        <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
      </svg>
    )
  },
  {
    "title": "My Network",
    "icon": (
      <svg viewBox='0 0 24 24'>
        <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
      </svg>
    )
  },
  {
    "title": "Jobs",
    "icon": (
      <svg viewBox='0 0 24 24'>
        <path fill="currentColor" d="M22 19H2V21H22V19M4 15C4 15.5 4.2 16 4.6 16.4C5 16.8 5.5 17 6 17V6C5.5 6 5 6.2 4.6 6.6C4.2 7 4 7.5 4 8V15M13.5 6H10.5C10.5 5.6 10.6 5.2 10.9 4.9C11.2 4.6 11.5 4.5 12 4.5C12.4 4.5 12.8 4.6 13.1 4.9C13.3 5.2 13.5 5.6 13.5 6M7 6V17H17V6H15C15 5.2 14.7 4.5 14.1 3.9S12.8 3 12 3C11.2 3 10.5 3.3 9.9 3.9C9.3 4.5 9 5.2 9 6H7M18 17C18.5 17 19 16.8 19.4 16.4C19.8 16 20 15.5 20 15V8C20 7.5 19.8 7 19.4 6.6C19 6.2 18.5 6 18 6V17Z" />
      </svg>
    )
  },
  {
    "title": "Messaging",
    "icon": (
      <svg viewBox='0 0 24 24'>
        <path fill="currentColor" d="M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3M17,12V10H15V12H17M13,12V10H11V12H13M9,12V10H7V12H9Z" />
      </svg>
    )
  },
  {
    "title": "Notification",
    "icon": (
      <svg viewBox='0 0 24 24'>
        <path fill="currentColor" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
      </svg>
    )
  },
]

const Header = () => {

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__left'>
          <img src={Logo} />
          <div className='header__search'>
            <div className="search__icon">
              <img src={IconSearch} />
            </div>
            <input type="text" id="email-adress-icon" className="search__input" placeholder="Search" />
          </div>
        </div>
        <div className='header__right'>
          {
            menus.map((menu, i) => (
              <HeaderOption key={i}
                title={menu.title}
                icon={menu.icon}
              />
            ))
          }
          <HeaderOption
            title="Abdillah F"
            icon={
              <Avatar
                height="h-6"
                width="w-6"
                avatar="https://siunix.com/static/media/profile.390255c82888cc52aeb0.jpg"
              />
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Header