import { useEffect, useState } from 'react';

const AnalyticsDebug = () => {
  const [gaStatus, setGaStatus] = useState<string>('Checking...');
  const [dataLayerStatus, setDataLayerStatus] = useState<string>('Checking...');
  const [gtagStatus, setGtagStatus] = useState<string>('Checking...');

  useEffect(() => {
    // Check if Google Analytics is loaded
    const checkGA = () => {
      // Check if gtag is available
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        setGtagStatus('✅ gtag function available');
      } else {
        setGtagStatus('❌ gtag function not available');
      }

      // Check if dataLayer is available
      if (typeof window !== 'undefined' && window.dataLayer) {
        setDataLayerStatus(`✅ dataLayer available (${window.dataLayer.length} items)`);
      } else {
        setDataLayerStatus('❌ dataLayer not available');
      }

      // Check if GA script is loaded
      const gaScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
      if (gaScript) {
        setGaStatus('✅ Google Analytics script loaded');
      } else {
        setGaStatus('❌ Google Analytics script not found');
      }
    };

    // Check immediately
    checkGA();

    // Check again after a delay
    const timeout = setTimeout(checkGA, 2000);

    return () => clearTimeout(timeout);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg shadow-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">🔍 Analytics Debug</h3>
      <div className="space-y-1">
        <div>Script: {gaStatus}</div>
        <div>DataLayer: {dataLayerStatus}</div>
        <div>Gtag: {gtagStatus}</div>
        <div className="mt-2 pt-2 border-t border-gray-600">
          <div>URL: {window.location.href}</div>
          <div>Title: {document.title}</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDebug;
