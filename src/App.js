import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Details from './Details/Details';
import Comment from './Comment/Comment';


class App extends Component {

  state = {
    okr: [{
      "id": 1,
      "object": "天冷了",
      "key_results": "水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水",
      "action": "真棒",
      "user_id": 1,
      "created_at": "0000-00-00 00:00:00",
      "username": "157775",
      "avatar": "http://pic.58pic.com/58pic/15/61/85/55Y58PICXeV_1024.png"
    }]
    

  }

  render() {
    var okr = this.state.okr;
    
    return (
      <div>
        <Header></Header>
        {
          okr.map(item => {
            return <Details a={item}></Details>
          })
        }

        <Comment></Comment>

      </div>
    );
  }
}

export default App;
