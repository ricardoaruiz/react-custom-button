import React from 'react'

import './Button.css'

const Button = ({ primary = true, ...props }) => {

    const classes = React.useMemo(() => {
        return `button ${primary ? 'primary' : 'secondary'}`
    }, [primary])

    return (
        <button type="button" className={classes} { ...props }>
            Custom buttom
        </button>
    )
}

export default Button