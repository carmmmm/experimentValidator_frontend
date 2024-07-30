import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '28px',
    },
};

const SaveTimeText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text ?? 'Save time and resources by validating designs before execution'}
        </div>
    );
};

export default SaveTimeText;