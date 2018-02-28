import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'
import { api } from '../api'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '1000px',
    height: 'auto',
    overflowY: 'auto',
    margin: '0 auto'
  },
  gridText: {
    float: 'left',
    clear: 'both'
  },
}

function getClubList (context) {
  api.get('/club/list', {page: 1, size: 8})
    .then((response) => response.data)
    .then((data) => context.setState({clubList: data}))
}

const tilesData = [
  {
    img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
]

class ClubList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {clubList: []}
    getClubList(this)

  }

  render () {
    return (
      <div>
        <GridList
          cellHeight={250}
          style={styles.gridList}
        >
          <Subheader>소모임 리스트</Subheader>
          {this.state.clubList.map((club, i) => {
            return (
              <Link to={'/club/' + (i + 1)} cols={0.66}>
                <GridTile
                  style={styles.gridTile}
                  titleStyle={styles.gridText}
                  subtitleStyle={styles.gridText}
                  key={i}
                  title={club['name']}
                  subtitle={club['introduce_one_line']}
                >
                  <img src={tilesData[i].img}/>
                </GridTile>
              </Link>
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default ClubList
