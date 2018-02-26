import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import Subheader from 'material-ui/Subheader'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

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
  render () {
    return (
      <div>
        /*what is somoim?*/
        <GridList
          cellHeight={250}
          style={styles.gridList}
        >
          <Subheader>소모임 리스트</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span>by <b>{tile.author}</b></span>}
              cols={0.666}
              actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
            >
              <img src={tile.img}/>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default ClubList
