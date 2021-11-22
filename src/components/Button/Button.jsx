import React from 'react'

import './styles.css'

export const Button = ({ primary = true, ...props }) => {

    const classes = React.useMemo(() => {
        return `button ${primary ? 'primary' : 'secondary'}`
    }, [primary])

    return (
        <button type="button" className={classes} { ...props }>
            Custom buttom
        </button>
    )
}


