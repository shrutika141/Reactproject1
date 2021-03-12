import React, { Component, Fragment } from 'react';
import Card from './Component/Card/Card';

class App extends Component {
  state = {
    Cards: [
      { image: "https://images.unsplash.com/photo-1613734307481-2e0bd36adddd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
        title: "Muhammad Abdullah",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eveniet maxime omnis repudiandae adipisci deleniti vel ducimus ipsam odio minus.'
      }
    ]
  }
  render() {
    return (
      <Fragment>
        <Card card1={this.state.Cards[0]}></Card>
      </Fragment>
    )
  }
}

export default App;
