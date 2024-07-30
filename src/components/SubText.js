import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '16px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '24px',
    },
};

const SubText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text ?? 'Home'}
        </div>
    );
};

export default SubText;