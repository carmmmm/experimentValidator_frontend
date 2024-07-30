import React from 'react';

const styles = {
    Card: {
        top: '128px',
        left: '48px',
        width: '1344px',
        height: '756px',
        backgroundColor: '#2f2f2f',
        borderRadius: '24px',
    },
};

const Card = (props) => {
    return (
        <div style={styles.Card}>
            {props.children}
        </div>
    );
};

export default Card;