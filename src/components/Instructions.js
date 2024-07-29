import React from 'react';
import { Link } from 'react-router-dom';
import './Instructions.css'; // Add your custom styles

function Instructions() {
    return (
        <div className="instructions-page">
            <h2>Detailed Instructions</h2>
            <p>
                Welcome to the Experiment Analysis Tool! Here's how you can use it:
            </p>
            <h3>Using the App</h3>
            <ul>
                <li>Enter your OpenAI API key into the designated field.</li>
                <li>Provide your experiment parameters in the provided text area.</li>
                <li>Click "Submit" to receive feedback on potential flaws and relevant research articles.</li>
            </ul>
            <h3>Getting Your OpenAI Key</h3>
            <ul>
                <li>Sign up at <a href="https://platform.openai.com/signup" target="_blank" rel="noopener noreferrer">OpenAI</a>.</li>
                <li>Navigate to the API section in your account settings.</li>
                <li>Copy your API key and paste it into the provided field on the webpage.</li>
            </ul>
            <Link to="/" className="back-button">Back to Home</Link>
        </div>
    );
}

export default Instructions;