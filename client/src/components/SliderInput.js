import React from 'react'
import PropTypes from 'prop-types'
import './SliderInput.css'

export default function SliderInput({name, value, onChange}) {
	return (
		<div className="fmz-slider">
			<p>{value}%</p>
			<input type="range"
				name={name}
				value={value}
				min={0}
				max={10}
				step={0.25}
				onChange={onChange}/>
		</div>
	)
}

SliderInput.propTypes = {
	name: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func
}
