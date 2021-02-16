import React, { Component } from 'react';
import Dl from './dl'
import data from './data'
import { Provider } from './context'
import Child from './child'

// function App() {
//   return (
//     <h1>Hello React</h1>)
// }

class App extends Component {
  state = { openName: "" }

  changeOpen = openName => {
    this.setState({ openName })
  }

  render() {
    let { openName } = this.state
    return (
      <Provider value={{ info: "data need pass to child" }}>
        <div className="friend-list">
          {
            Object.keys(data).map(itemName =>
              <Dl
                key={itemName}
                dlData={data[itemName]}
                openName={openName}
                changeOpen={this.changeOpen}
                name={itemName}
              />)
          }
        </div>
        <Child />
      </Provider>
    )
  }
}

export default App;
