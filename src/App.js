import React, { Component } from 'react';
import"semantic-ui-css/semantic.min.css";
import {Button} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
      <h3>Sekarang Belajar Semantic UI</h3>
      <Button primary>Ini Tombol satu</Button>
      <Button secondary>Ini Tombol dua</Button>

      </div>
    );
  }
}

export default App;
