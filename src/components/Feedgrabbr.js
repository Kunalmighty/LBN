import React from 'react'
import styled from 'styled-components'

class Feedgrabbr extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        hasScrolled: false
      }
    }

componentDidMount() {
    window.feedgrabbrWidget();
}

render() {
    return (<div id="feedgrabbr_widget"></div>);
}