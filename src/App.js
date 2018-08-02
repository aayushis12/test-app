import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlexiComponent from './flexi-component';

const flexiConfig = {
  items: [
  {
  "name": "personname",
  "label": "Person's Name",
  "type": "TextField",
  },
  {
  "name": "states",
  "label": "Person's state",
  "type": "DropDown",
  "values": [
  "Maharashtra",
  "Kerala",
  "Tamil Nadu"
  ]
  }
]
};
class App extends Component {
  onSubmit = value => {
    if(!value.name || value.city === 'Select One'){
      alert('Please fill all the details')
    }else{
      alert(JSON.stringify(value))
    }
  }

  render() {
    return (
      <div>
        <FlexiComponent config={flexiConfig} onSubmit={(value) => this.onSubmit(value)}/>
      </div>
    );
  }
}

export default App;
