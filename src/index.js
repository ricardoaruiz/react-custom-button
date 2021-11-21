import React from 'react'

export const Button = ({ primary = true, ...props }) => {

    const styles = React.useMemo(() => {
        const style =  primary 
            ? { backgroundColor: 'blue' } 
            : { backgroundColor: 'green' }

        return {
            padding: '8px',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            ...style
        }
    }, [primary])

    return (
        <button type="button" style={styles} { ...props }>
            Custom buttom
        </button>
    )
}


