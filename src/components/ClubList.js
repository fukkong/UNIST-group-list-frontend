import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import { api } from '../api'

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
}

function getClubList (context) {
  const a = []
  const getClubList = api.get('/club/list')
    .then((response) => response.data)
    .then((data) => context.setState({clubList: data}))
    .then(() => console.log(context.state.clubList))
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
          <Subheader>이건 나오나</Subheader>
          {this.state.clubList.map((club, i) => {
            console.log('what the fuck is in club list? ' + JSON.stringify(this.state.clubList[0]))
            return (
              <GridTile
                key={i}
                title={club['name']}
                subtitle={club['introduce_one_line']}
                cols={0.666}
                actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
              >
                <img src={tilesData[i].img}/>
              </GridTile>
            )
          })}
        </GridList>
      </div>
    )
  }
}

export default ClubList
