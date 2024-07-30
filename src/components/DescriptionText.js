import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '50px',
        textAlign: 'center',
    },
};

const DescriptionText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text ?? 'EDValidator is a powerful tool that helps researchers and scientists validate the design of their experiments, ensuring accuracy and reliability in their results.'}
        </div>
    );
};

export default DescriptionText;