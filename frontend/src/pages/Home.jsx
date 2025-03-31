import { useState, useEffect } from 'react';
import api from '../api';
import "../styles/Home.css";

function Home() {

    const redirectToForm = () => {
        // Redirect to the form page
        window.location.href = '/application';
        }

    return (
        <div className="box2">
            <div className="box1">
            <div className='container'>
                <h1>PURE MODELS</h1>
                <div className="line"></div>
                <div className='heading'>
                    <p>Hey! Thank you for reaching out. Please go through the little form, and get started!</p>
                    <div className='button-container'>
                        <button onClick={redirectToForm} className='custom-button'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;