import React, { Component } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const localStyle = {
  CardStyle: {
    width: '720px',
    height: '360px',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '150px',
    padding: '20px'
  },
  buttonStyle: {
    margin: '12px'
  },
  loginTitle: {
    fontSize: '30px'
  }
}

class LoginPage extends Component {
  render () {
    return (
      <div className="login-page">
        <Card style={localStyle.CardStyle}>
          <p style={localStyle.loginTitle}>Login Page</p>
          <TextField
            floatingLabelText="ID"
            id="id-text-field"
          /><br/>
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          /><br/>
          <RaisedButton label="Login" style={localStyle.buttonStyle}/>
          <RaisedButton label="Register" primary={true} style={localStyle.buttonStyle}/>
        </Card>
      </div>
    )
  }
}

export default LoginPage
