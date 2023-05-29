import 'antd/dist/antd.css';
import React from 'react';
import { Layout, Space } from 'antd';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import DetailArticle from './detailarticle';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <Layout>
      <Router>
        <Header>
          <nav>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/about">About</Link>
            </Space>
          </nav>
        </Header>
        <Content style={{ padding: '0 50px', height: '90%' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/dashboard/:id" element={<DetailArticle />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
        <Footer>
          <p style={{ color: 'green' }}>VT6003CEM Demo</p>
        </Footer>
      </Router>
    </Layout>
  );
}

export default App;

