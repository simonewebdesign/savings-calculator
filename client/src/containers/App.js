import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CurrencyInput from '../components/CurrencyInput'
import SliderInput from '../components/SliderInput'
import DisplayGraph from '../components/DisplayGraph'

import * as Actions from '../actions'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.root.amounts.map((a, idx) => ({month: idx+1, amount: a}))
    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
        </div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput name="initialSavings" onChange={handleChange.bind(this.props)}/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput name="monthlySavings" onChange={handleChange.bind(this.props)}/>

          <p className="input-label">How much interest will you earn per year?</p>
          <SliderInput name="interestRate" onChange={handleChange.bind(this.props)} value={this.props.root.fields.interestRate}/>
        </div>
        <div className="financial-display">
          <DisplayGraph data={data}/>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  root: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function handleChange(event) {
  const {dispatch, root} = this,
        {name, value}    = event.target,
        newFields = {
          ...root.fields,
          [name]: value
        }

  dispatch(Actions.changeField(name, value))
}

const mapStateToProps = state => ({
  root: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
