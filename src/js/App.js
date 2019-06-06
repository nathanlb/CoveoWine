import React, {Component} from 'react'

class App extends Component {

  constructor() {
    super()

    this.state = {
 
    }
  }

  setSidebarState = (state) => { this.setState( { sideBarOpen: state } )}

  render() {
      return (
          <div
            style={{
              height: '100%',
              width: '100%',
              top: '0px',
              position: 'absolute',
            }}>
            {/* Insert Components Here */}
          </div>
      )
  }
}

export default App