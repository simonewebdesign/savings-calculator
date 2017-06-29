import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CurrencyInput from '../components/CurrencyInput'
import SliderInput from '../components/SliderInput'
import DisplayGraph from '../components/DisplayGraph'

import * as Actions from '../actions'
import './App.css'


const App = ({root, actions}) => (
  <div className="App">
    <div className="header-banner">
      <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
    </div>
    <div className="financial-inputs">
      <p className="input-label">How much have you saved?</p>
      <CurrencyInput defaultValue={0}/>

      <p className="input-label">How much will you save each month?</p>
      <CurrencyInput defaultValue={0}/>

      <p className="input-label">How much interest will you earn per year?</p>
      <SliderInput defaultValue={4}/>
    </div>
    <div className="financial-display">
      {/*We have included some sample data here, you will need to replace this
      with your own. Feel free to change the data structure if you wish.*/}
      <DisplayGraph data={[
        {
          month: 1,
          amount:500
        },
        {
          month: 2,
          amount:700
        },
        {
          month: 3,
          amount:1000
        },
        {
          month: 4,
          amount:1500
        }
      ]}/>
    </div>
  </div>
)


App.propTypes = {
  root: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  root: state.root
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
