import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ExperimentForm from './components/ExperimentForm';
import Instructions from './components/Instructions';
import './App.css'; // Add your custom styles

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Experiment Analysis Tool</h1>
                    <p>Evaluate your experiment setup and get relevant research articles.</p>
                    <nav>
                        <Link to="/">Home</Link> | <Link to="/instructions">Instructions</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<ExperimentForm />} />
                    <Route path="/instructions" element={<Instructions />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;