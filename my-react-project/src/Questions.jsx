import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Faq-container'>
            {/* If setIsOpen = !isOpen then the answer will be hidden
        thats the standart status
        
        but if we click the question it will show the answer
        because isOpen is now set to true*/}
            <h3 id='question' onClick={() => setIsOpen(!isOpen)}>{question}</h3>
            {isOpen && <p id='answer'>· {answer}</p>}
        </div>
    );
};

export default Accordion;