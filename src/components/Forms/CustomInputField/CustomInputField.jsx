import React from "react";
import PropTypes from 'prop-types';


const CustomInputField = (props) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
    // ...other
  } = props;

  return (
    <CustomInputField
      label={label}
      type={type}
      error={!!(touched && error)}
      helperText={touched && error}
      {...input}
    />
  );
};

CustomInputField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.bool,
  other: PropTypes.bool,
};

