import React, { useState } from 'react';

const Form2: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        experience: '',
        interest: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission removed - button does nothing
    };

    return (
        <div className="form-container">
            <h3>Interested in Scuba Diving?</h3>
            <p>Fill out this form to learn more about getting started:</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="experience">Prior Experience:</label>
                    <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                    >
                        <option value="">Select your experience</option>
                        <option value="none">None</option>
                        <option value="snorkeling">Snorkeling only</option>
                        <option value="beginner">Beginner diver</option>
                        <option value="certified">Certified diver</option>
                        <option value="advanced">Advanced diver</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="interest">What interests you most about scuba diving?</label>
                    <textarea
                        id="interest"
                        name="interest"
                        rows={4}
                        value={formData.interest}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form2;