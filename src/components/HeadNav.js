import React from 'react'
import { FlatButton, AppBar } from 'material-ui'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const localStyle = {
  navigationBar: {
    backgroundColor: '#FFFFFF',
    height: '4rem'
  },
  navigationFont: {
    fontSize: '20',
    color: '#039BE5',
    margin: '10'
  },
  loginButton: {
    //float: 'right',
    align: 'center',
    height: '100%'
  },
  title: {
    display: 'none'
  },
  logoStyle: {
    fontWeight: 'bold',
    fontSize: '4rem',
    height: '100%'
  }

}

class HeadNav extends React.Component {
  render () {
    return (
      <AppBar
        style={localStyle.navigationBar}
        titleStyle={localStyle.title}
        showMenuIconButton={false}
      >
        <div style={{flex: 1, textAlign: 'center', height: '100%'}}>
          <Link to={'/'}>
            <FlatButton
              label="소모임.공간"
              labelStyle={{fontWeight: 'bold', fontSize: '3rem'}}
              style={localStyle.logoStyle}
            />
          </Link>
        </div>
      </AppBar>
    )
  }
}

export default HeadNav
