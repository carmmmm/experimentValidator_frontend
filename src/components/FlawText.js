import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '28px',
    },
};

const FlawText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text ?? 'Identify potential flaws in your experimental design'}
        </div>
    );
};

export default FlawText;