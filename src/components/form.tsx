import React, { useState } from 'react';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        aspects: {
            classical: false,
            spiritual: false,
            modern: false
        },
        level: '',
        comments: '',
        favPoet: 'mutanabbi'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                aspects: {
                    ...formData.aspects,
                    [name]: (e.target as HTMLInputElement).checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="form-container">
            <h3>Arabic Poetry Interest Form</h3>
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
                    <h4>Which aspects of Arabic poetry interest you?</h4>
                    <input
                        type="checkbox"
                        id="classical"
                        name="classical"
                        checked={formData.aspects.classical}
                        onChange={handleChange}
                    />
                    <label htmlFor="classical">Classical Qasidas</label><br />
                    <input
                        type="checkbox"
                        id="spiritual"
                        name="spiritual"
                        checked={formData.aspects.spiritual}
                        onChange={handleChange}
                    />
                    <label htmlFor="spiritual">Spiritual Poetry</label><br />
                    <input
                        type="checkbox"
                        id="modern"
                        name="modern"
                        checked={formData.aspects.modern}
                        onChange={handleChange}
                    />
                    <label htmlFor="modern">Modern Arabic Poetry</label>
                </div>

                <div>
                    <h4>How familiar are you with Arabic poetry?</h4>
                    <input
                        type="radio"
                        id="beginner"
                        name="level"
                        value="beginner"
                        checked={formData.level === 'beginner'}
                        onChange={handleChange}
                    />
                    <label htmlFor="beginner">Beginner</label><br />
                    <input
                        type="radio"
                        id="intermediate"
                        name="level"
                        value="intermediate"
                        checked={formData.level === 'intermediate'}
                        onChange={handleChange}
                    />
                    <label htmlFor="intermediate">Intermediate</label><br />
                    <input
                        type="radio"
                        id="advanced"
                        name="level"
                        value="advanced"
                        checked={formData.level === 'advanced'}
                        onChange={handleChange}
                    />
                    <label htmlFor="advanced">Advanced</label>
                </div>

                <div>
                    <label htmlFor="comments">Share your favorite verse or experience:</label><br />
                    <textarea
                        id="comments"
                        name="comments"
                        rows={4}
                        cols={50}
                        value={formData.comments}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="favPoet">Favorite classical poet:</label>
                    <select
                        id="favPoet"
                        name="favPoet"
                        value={formData.favPoet}
                        onChange={handleChange}
                    >
                        <option value="mutanabbi">Al-Mutanabbi</option>
                        <option value="busiri">Al-Busiri</option>
                        <option value="farid">Ibn al-Farid</option>
                        <option value="rumi">Jalal al-Din Rumi</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;