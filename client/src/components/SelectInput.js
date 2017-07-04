import React from 'react'
import PropTypes from 'prop-types'
import './SelectInput.css'

export default function SelectInput({name, value, onChange, options}) {
  return (
    <div className="select-input">
      <select
        name={name}
        onChange={onChange}>
        {
          options.map(v =>
            <option key={v} value={v} selected={v === value}>{v}</option>
          )
        }
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array
}
