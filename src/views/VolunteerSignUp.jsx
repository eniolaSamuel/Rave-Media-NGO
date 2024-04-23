import React, { useState } from 'react';
import '../styles/VolunteerSignUp.css';
import VolunteerImage from "../assets/image/svg/volunteer-image.svg"

function VolunteerSignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        console.log(formData);
        // Reset form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="volunteer-container">
            <div className="volunteer-sub-container">
                <div className="volunteer-image">
                    <img src={VolunteerImage} alt={VolunteerImage}/>
                </div>
                <div className="volunteer-form">
                    <h1>Volunteer Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">full name:</label>
                        <input type="text" placeholder="e.g john doe" id="name" name="name" value={formData.name} onChange={handleChange} required />

                        <label htmlFor="email">email:</label>
                        <input type="email" placeholder="e.g yourname@example.com" id="email" name="email" value={formData.email} onChange={handleChange} required />

                        <label htmlFor="phone">phone:</label>
                        <input type="tel" placeholder="e.g 08000000000" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                        <label htmlFor="message">message (Optional):</label>
                        <textarea id="message" placeholder="ask us any questions you might have"
                                  name="message" value={formData.message} onChange={handleChange} rows="4"></textarea>

                        <button type="submit">sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VolunteerSignUp;
