import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widget from './components/widget/Widget';

const App = () => {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
