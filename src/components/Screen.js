import React from 'react';

const styles = {
    Screen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#000000',
        padding: '20px',
    },
};

const Screen = (props) => {
    return (
        <div style={styles.Screen}>
            {props.children}
        </div>
    );
};

export default Screen;