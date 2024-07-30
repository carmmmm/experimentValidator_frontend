import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '28px',
    },
};

const ValidateText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text ?? 'Ensure accurate and reliable experiment results'}
        </div>
    );
};

export default ValidateText;