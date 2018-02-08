import React, { Component } from 'react'
import logo from '../logo.svg'
import Banner from '../components/Banner'
import HomeHeader from '../components/HomeHeader'
import ClubList from '../components/ClubList'
import './Home.css'

class Home extends Component {
  render () {
    return (
      <div className="App">
        <Banner/>
        <HomeHeader/>
        <p className="App-intro">
          i213
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ClubList/>
      </div>
    )
  }
}

export default Home
