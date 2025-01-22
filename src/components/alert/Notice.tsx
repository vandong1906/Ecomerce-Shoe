import React from 'react';

interface NoticeProps {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

const Notice: React.FC<NoticeProps> = ({ message, type }) => {
    return (
        <div className={`notice notice-${type} `}>
            {message}
        </div>
    );
};

export default Notice;