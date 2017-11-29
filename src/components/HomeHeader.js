import React from 'react';

const localStyle = {
  mainHeader: {
    height: '400px',
    background: 'url("http://www.unist.ac.kr/wp-content/uploads/2016/09/unist_main_5.jpg") center -200px / cover no-repeat',
    fontSize: '20px',
    color: '#FFFFFF'
  }

};

class HomeHeader extends React.Component{
    render() {
        return (
            <div style={localStyle.mainHeader}>
              <p>유니스트 소모임</p>
              <p>유니스트 소모임을 위한 페이지입니다.</p>
            </div>
        );
    }
};

export default HomeHeader;
