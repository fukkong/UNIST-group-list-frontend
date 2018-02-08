import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const localStyle = {
  navigationBar: {
    backgroundColor: '#FFFFFF',
  },
  navigationFont: {
    fontSize: '20',
    color: '#039BE5',
    margin: '10'
  },
  loginButton: {
    //float: 'right',
    align: 'center'
  }
}

class HeadNav extends React.Component {
  loginClick () {

  }

  render () {
    return (
      <div style={localStyle.navigationBar}>
        <div style={localStyle.navigationFont}>
          Unimo
          <FlatButton
            label="Login"
            style={localStyle.loginButton}
            onclick={this.loginClick()}
          />
        </div>
      </div>
    )
  }
}

export default HeadNav
