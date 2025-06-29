
import React, { useEffect } from 'react';

interface OmnidimensionWidgetProps {
  mode: 'chat' | 'voice';
}

export const OmnidimensionWidget: React.FC<OmnidimensionWidgetProps> = ({ mode }) => {
  useEffect(() => {
    // Remove any existing script
    const existingScript = document.getElementById('omnidimension-web-widget');
    if (existingScript) {
      existingScript.remove();
    }

    // Determine the secret key based on mode
    const secretKey = mode === 'voice' 
      ? 'c32e8da3e485de1111b74eae0cd2485e' 
      : '72e43dd33fb39300a99c44bb1c0f469c';

    // Create and append new script
    const script = document.createElement('script');
    script.id = 'omnidimension-web-widget';
    script.async = true;
    script.src = `https://backend.omnidim.io/web_widget.js?secret_key=${secretKey}`;
    
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptToRemove = document.getElementById('omnidimension-web-widget');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [mode]);

  return null; // This component doesn't render anything visible
};
