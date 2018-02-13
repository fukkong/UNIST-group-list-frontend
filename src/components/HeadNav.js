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
        <div style={{flex: 1, textAlign: 'left', height: '100%'}}>
          <Link to='/clubs'>
            <FlatButton
              label="소모임 리스트"
              style={localStyle.loginButton}
            />
          </Link>
          <Link to='/new-club'>
            <FlatButton
              label="소모임 생성"
              style={localStyle.loginButton}
            />
          </Link>
        </div>
        <div style={{flex: 1, textAlign: 'center', height: '100%'}}>
          <FlatButton
            label="소모임.공간"
            labelStyle={{fontWeight: 'bold', fontSize: '3rem'}}
            style={localStyle.logoStyle}
          />
        </div>
        <div style={{flex: 1, textAlign: 'right', height: '100%'}}>
          <Link to='/my-club'>
            <FlatButton
              label="나의 소모임"
              style={localStyle.loginButton}
            />
          </Link>
          <Link to='/login'>
            <FlatButton
              label="로그인"
              style={localStyle.loginButton}
            />
          </Link>
        </div>
      </AppBar>
    )
  }
}

export default HeadNav
