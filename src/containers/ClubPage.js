import React, { Component } from 'react'
import { api } from '../api'
import HeadNav from '../components/HeadNav'
import HomeHeader from '../components/HomeHeader'
import './Home.css'

function getClubData (context) {
  api.get('/club/' + context.state.clubId)
    .then((response) => response.data)
    .then((data) => context.setState({clubData : data}))
}

class ClubPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clubId: props.match.params.id,
      clubData: []
    }
    getClubData(this)
  }

  render () {
    return (
      <div className="App">
        <HeadNav/>
        <HomeHeader/>
        <h1>clubname: {this.state.clubData['name']}</h1>
        <h3><font color="red">introduce_one_line: {this.state.clubData['introduce_one_line']}</font></h3>
        <h3>tel: {this.state.clubData['introduce_all']}</h3>
        <h3>etc.: {this.state.clubData['created'], this.state.clubData['manager']}</h3>
      </div>
    )
  }
}

export default ClubPage