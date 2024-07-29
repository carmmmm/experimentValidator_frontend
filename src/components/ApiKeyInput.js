// src/components/ApiKeyInput.js
import React, { useState } from 'react';

function ApiKeyInput({ onApiKeySubmit }) {
    const [apiKey, setApiKey] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (apiKey) {
            onApiKeySubmit(apiKey);
        }
    };

    return (
        <div className="api-key-container">
            <h2>Enter OpenAI API Key</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="OpenAI API Key"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ApiKeyInput;