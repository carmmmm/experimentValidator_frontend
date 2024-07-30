import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import Card from './Card';
import Screen from './Screen';
import { Link } from "react-router-dom";

const ExperimentForm = () => {
    const [hypothesis, setHypothesis] = useState('');
    const [sampleSize, setSampleSize] = useState('');
    const [variables, setVariables] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/validate-experiment', {
                hypothesis,
                sampleSize,
                variables,
                apiKey
            });
            setResult(response.data.result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Screen>
            <Card>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <h1 style={{ margin: 50 }}>Validate Your Experimental Designs with Ease</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Hypothesis"
                        value={hypothesis}
                        onChange={(e) => setHypothesis(e.target.value)}
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiInputBase-input': {
                                color: '#ffffff', // Text color
                            },
                            '& .MuiInputLabel-root': {
                                color: '#ffffff', // Label color
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff', // Border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff', // Border color when focused
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Sample Size"
                        value={sampleSize}
                        onChange={(e) => setSampleSize(e.target.value)}
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiInputBase-input': {
                                color: '#ffffff', // Text color
                            },
                            '& .MuiInputLabel-root': {
                                color: '#ffffff', // Label color
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff', // Border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff', // Border color when focused
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Variables"
                        value={variables}
                        onChange={(e) => setVariables(e.target.value)}
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiInputBase-input': {
                                color: '#ffffff', // Text color
                            },
                            '& .MuiInputLabel-root': {
                                color: '#ffffff', // Label color
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff', // Border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff', // Border color when focused
                                },
                            },
                        }}
                    />
                    <TextField
                        label="OpenAI API Key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiInputBase-input': {
                                color: '#ffffff', // Text color
                            },
                            '& .MuiInputLabel-root': {
                                color: '#ffffff', // Label color
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#ffffff', // Border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#ffffff', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ffffff', // Border color when focused
                                },
                            },
                        }}
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
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" className="back-button">Back to Home</Link>
                </div>
            </Card>
        </Screen>
    );
};

export default ExperimentForm;