import React, { Component } from 'react'
import Restaurant from '../customer/Restaurant'

export default class Customer extends Component {
  render() {
    return (
      <div>
        <h1>Welcome Customer</h1>
        <br />
        <Restaurant />
      </div>
    )
  }
}
