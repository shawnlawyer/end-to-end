import React, { Component } from 'react';
import { Route, Switch , Redirect } from 'react-router-dom'
import Home from './components/Home';
import HeaderMenu from './components/HeaderMenu';
import About from './components/About';
import NotFound from './components/NotFound';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
        <Layout style={{ background:'#fff', height:'100vh' }}>
            <Sider style={{ background:'#dde364' }} >Sider</Sider>
                <Layout>
                    <HeaderMenu />
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route exact path="/about" component={About}/>
                                    <Route path='*' component={NotFound} />

                                </Switch>
                            <Footer style={{ background:'#193ed1' }}>Footer</Footer>
                        </Layout>
                    </Layout>
                </div>
              );
            }

    export default App;
