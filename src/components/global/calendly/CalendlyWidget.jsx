// src/components/CalendlyWidget.jsx
import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly-inline-widget" 
             data-url="https://calendly.com/your-calendly-link" 
             style={{ minWidth: '320px', height: '700px' }} />
    );
};

export default CalendlyWidget;
