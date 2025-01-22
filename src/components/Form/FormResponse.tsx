import React from 'react';

interface FormResponseProps {
    name: string;
    email: string;
    message: string;
}

const FormResponse: React.FC<FormResponseProps> = ({ name, email, message }) => {
    return (
        <div>
            <h2>Thank you for your submission, {name}!</h2>
            <p>We have received your message and will get back to you at {email} as soon as possible.</p>
            <div>
                <h3>Your Message:</h3>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default FormResponse;