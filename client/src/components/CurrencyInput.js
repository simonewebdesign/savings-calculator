import React from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

export default function CurrencyInput(props) {
	return (
		<div className="currency-input">
			<span>£</span>
			<input type="number"
				name={props.name}
				min="0"
				value={props.value}
				onChange={props.onChange}/>
		</div>
	)
}

CurrencyInput.propTypes = {
	name: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func
}
