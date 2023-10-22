import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
        <label>
            Find contacts by name
            <input
                type='text'
                name='filter'
                value={filter}
                onChange={onChange}
            />
        </label>
    )
  }
}
