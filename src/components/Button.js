import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    Button: {
        cursor: 'pointer',
        top: '784px',
        left: '592px',
        width: '255px',
        height: '52px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '24px',
        backgroundColor: '#000000',
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '28px',
        outline: 'none',
    },
};

const Button = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/experiment');
    };

    return (
        <button style={styles.Button} onClick={handleClick}>
            {props.label ?? 'Access the Assessment Tool'}
        </button>
    );
};

export default Button;