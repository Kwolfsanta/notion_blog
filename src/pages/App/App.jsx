import './App.scss';
import React from 'react';
import Card from '../../components/Card/index';
import PageContainer from '../../components/PageContainer/index';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {

  // handleClick = () => {
  //   this.props.history.push('/content');
  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>iiiJr's Blog</h1>
          <div className="App-intro">hi there</div>
        </header>
        <main className="App-main">
          <Routes>
            <Route path='/' element={ <Card /> }/>
            <Route path='/:id' element={ <PageContainer /> } />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>footer</p>
          <p>github</p>
        </footer>
      </div>
    );
  }
}

export default App;
