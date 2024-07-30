import React from 'react';

const styles = {
    Text: {
        color: '#ffffff',
        fontSize: '16px',
        fontFamily: 'Source Sans Pro',
        lineHeight: '24px',
    },
};

const FeedbackText = (props) => {
    return (
        <div style={styles.Text}>
            {props.text ?? 'Feedback'}
        </div>
    );
};

export default FeedbackText;