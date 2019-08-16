import React from "react";

import "./FormInput.styles.sass";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="input-group">
    <input className="form__input" onChange={handleChange} {...otherProps} />
    {
      label ?
      (<label className={`${otherProps.value.length ? "shrink" : ""} form__label`}>
        {label}
       </label>)
      : null
    }
  </div>
);

export default FormInput;