import React from 'react';

const styles = {
    Footer: {
        top: '932px',
        left: '0px',
        width: '1440px',
        height: '144px',
        backgroundColor: '#000000',
    },
};

const Footer = (props) => {
    return (
        <div style={styles.Footer}>
            {props.children}
        </div>
    );
};

export default Footer;