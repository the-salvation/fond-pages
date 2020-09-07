import React from 'react'

const CustomInputField = props => {
    const { input, label, type, meta: { touched, error }, ...other } = props

    return (
        <CustomInputField
            label={label}
            type={type}
            error={!!(touched && error)}
            helperText={touched && error}
            {...input}
        />
    )
}