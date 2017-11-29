import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const localStyle = {
  bannerBar: {
    backgroundColor: '#FFFFFF',
  },
  bannerFont: {
    fontSize: '20',
    color: '#039BE5',
    margin: '10'
  },
  loginButton: {
    //float: 'right',
    align: 'center'
  }
};
class Banner extends React.Component{
  loginClick() {


  }

  render() {
    return (
      <div style={localStyle.bannerBar}>
        <div style={localStyle.bannerFont}>
          Unimo
          <FlatButton
              label="Login"
              style={localStyle.loginButton}
              onclick={this.loginClick()}
          />
        </div>
      </div>
    );
  }
};

export default Banner;
