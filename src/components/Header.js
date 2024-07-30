import React from 'react';

const styles = {
    Header: {
        top: '0px',
        left: '0px',
        width: '1440px',
        height: '80px',
        backgroundColor: '#000000',
    },
};

const Header = (props) => {
    return (
        <div style={styles.Header}>
            {props.children}
        </div>
    );
};

export default Header;