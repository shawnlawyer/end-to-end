import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function HeaderMenu() {
  return (
      <Header style={{ background:'#fff' }}>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                </Header>
  );
}

export default withRouter(HeaderMenu);
