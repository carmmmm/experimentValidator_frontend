import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '24px',
        fontFamily: 'Source Sans Pro',
        letterSpacing: '-0.6px',
        lineHeight: '32px',
    },
};

const MainText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text}
        </div>
    );
};

export default MainText;