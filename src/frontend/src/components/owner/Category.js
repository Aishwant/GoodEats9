import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
