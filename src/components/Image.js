import React from 'react';

const styles = {
    ImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Make the container take up the full width of the parent
        height: '300px', // Set the desired height for the container
    },
    Image: {
        width: '100%', // Make the image responsive
        maxWidth: '400px', // Set the maximum width for the image
        height: 'auto', // Maintain aspect ratio
    },
};

const defaultProps = {
    image: 'https://assets.api.uizard.io/api/cdn/stream/2876e27a-a6a7-410f-b7e8-33df3fd68b11.png',
};

const Image = (props) => {
    return (
        <div style={styles.ImageContainer}>
            <img src={props.image ?? defaultProps.image} alt="EDValidator" style={styles.Image} />
        </div>
    );
};

export default Image;