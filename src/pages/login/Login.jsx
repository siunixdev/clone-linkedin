import React, { useEffect, useState } from 'react'
import './Login.sass'
import Button from '../../components/base/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { signAPI } from '../../actions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // const [auth, setAuth] = useState(null)
  const user = useSelector((state) => state.userState.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const sign = () => {
    dispatch(signAPI())
  }

  useEffect(() => {
    user && navigate('/')
  })

  return (
    <div className='login'>
      <div>
        <img src='/images/logo.svg' className='w-32' />
      </div>
      <div className='login__container'>
        <div className='login__left'>
          <span className='login__text'>
            Welcome to your professional community
          </span>
          <div>
            <Button
              onClick={() => sign()}
              text="Login with Google"
              type="btn btn--primary btn--pill"
              icon={
                <svg viewBox="0 0 24 24" className='h-5 w-5'>
                  <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                </svg>
              }
            />
          </div>
        </div>
        <div><img src='/images/img-login.svg' className='w-full' /></div>
      </div>
    </div>
  )
}

export default Login