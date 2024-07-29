import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const ExperimentForm = () => {
    const [params, setParams] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/validate-experiment', { params, apiKey });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Experiment Validator
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Experiment Parameters"
                    value={params}
                    onChange={(e) => setParams(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="OpenAI API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
            </form>
            {result && (
                <>
                    <Typography variant="h6" gutterBottom>
                        Result:
                    </Typography>
                    <Typography>{result}</Typography>
                </>
            )}
        </Container>
    );
};

export default ExperimentForm;