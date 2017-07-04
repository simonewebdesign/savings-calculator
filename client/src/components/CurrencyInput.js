import React from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

export default function CurrencyInput(props) {
	return (
		<div className={`currency-input ${props.defaultValue !== undefined ? 'default-value' : ''}`}>
			<span>£</span>
			<input type="number"
				min="0"
				value={props.value}
				onChange={props.onChange}/>
		</div>
	)
}

CurrencyInput.propTypes = {
	defaultValue: PropTypes.number,
	value: PropTypes.number,
	onChange: PropTypes.func
}
