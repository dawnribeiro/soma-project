import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import ActiveCalls from './components/ActiveCalls'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <ActiveCalls />
      </section>
    )
  }
}

export default App
