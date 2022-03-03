import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Widget from '../../components/widget/Widget';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState({})
  const auth = useSelector((state) => state.userState.user)
  const navigate = useNavigate()

  useEffect(() => {
    setUser(auth)
    !auth && navigate("/login")
  }, [])

  return (
    <div className="app">
      <Header user={user} />
      <div className='app__body'>
        <Sidebar user={user} />
        <Feed photoUrl={user.photoUrl} />
        <Widget />
      </div>
    </div>
  )
}

export default Home