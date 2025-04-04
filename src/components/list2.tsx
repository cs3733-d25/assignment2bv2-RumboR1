import React from 'react';
import '../list.css';

const List2: React.FC = () => {
    return (
        <div className="list-container">
            <h3>Why I Love Scuba Diving:</h3>
            <ul className="custom-list">
                <li>Experiencing the beauty of underwater ecosystems</li>
                <li>The peacefulness and serenity beneath the waves</li>
                <li>Meeting new marine creatures with each dive</li>
                <li>The challenge of mastering diving techniques</li>
                <li>The thrill of exploring shipwrecks and underwater caves</li>
            </ul>
        </div>
    );
};

export default List2;