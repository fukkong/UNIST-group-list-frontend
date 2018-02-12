import React from 'react'
import { api } from '../api'
import Chip from 'material-ui/Chip'

const localStyle = {
  chip: {
    margin: 'auto'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

function handleRequestDelete () {
  alert('You clicked the delete button.')
}

function handleClick () {
  alert('You clicked the Chip.')
}

export function getNotice (context) {
  const a = []
  const notice = api.get('/notice')
    .then((response) => response.data[0].title)
    .then(i => a.push(i))
    .then(() => context.setState({noticeTitle: a[0]})
    )
}

class OneLineNotice extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      noticeTitle: ''
    }
    getNotice(this)
  }

  render () {
    return (
      <div style={localStyle.wrapper}>
        <Chip onRequestDelete={handleRequestDelete}
              onClick={handleClick}
              style={localStyle.chip}>
          공지사항: {this.state.noticeTitle}
        </Chip>
      </div>

    )
  }
}

export default OneLineNotice
