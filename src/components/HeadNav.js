import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <Link to="/login">
            <FlatButton
              label="Login"
              style={localStyle.loginButton}
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default HeadNav
