import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';
import Image from './Image';
import DescriptionText from './DescriptionText';
import ValidateText from './ValidateText';
import FlawText from './FlawText';
import SaveTimeText from './SaveTimeText';
import Button from './Button';
import Screen from './Screen';
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate(); // Hook to get the navigate function

    const handleButtonClick = () => {
        navigate('/experiment'); // Navigate to the /experiment route
    };

    return (
        <Screen>
            <Card>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <h1 style={{ margin: 50 }}>Validate Your Experimental Designs with Ease</h1>
                </div>
                <div style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center' }}>
                    <Image image="https://assets.api.uizard.io/api/cdn/stream/2876e27a-a6a7-410f-b7e8-33df3fd68b11.png" />
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <DescriptionText text="This validator is a powerful tool that helps researchers and scientists validate the design of their experiments, ensuring accuracy and reliability in their results." />
                    <ValidateText text="Ensure accurate and reliable experiment results" />
                    <FlawText text="Identify potential flaws in your experimental design" />
                    <SaveTimeText text="Save time and resources by validating designs before execution" />
                    <Button label="Access the Assessment Tool" onClick={handleButtonClick} />
                </div>
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <nav>
                        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
                        <Link to="/instructions" style={{ margin: '0 10px' }}>Instructions</Link>
                    </nav>
                </div>
            </Card>
        </Screen>
    );
};

export default Home;