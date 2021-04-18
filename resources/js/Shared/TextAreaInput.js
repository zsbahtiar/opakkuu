import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <textarea
        id={name}
        name={name}
        {...props}
        className={`form-input h-full  ${errors.length ? 'error' : ''}`}
      >{props.value}</textarea>
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};
