import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExperimentForm from './components/ExperimentForm';
import Instructions from './components/Instructions';
import Home from './components/Home';
import './App.css'; // Add your custom styles

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/instructions" element={<Instructions />} />
                    <Route path="/experiment" element={<ExperimentForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;