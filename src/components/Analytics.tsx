import { useEffect } from 'react';
import { seoConfig } from '../config/seo';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4
    if (seoConfig.googleAnalyticsId && seoConfig.googleAnalyticsId !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${seoConfig.googleAnalyticsId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', seoConfig.googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Vercel Analytics (if enabled)
    if (seoConfig.vercelAnalytics && typeof window !== 'undefined') {
      // This will be handled by Vercel's analytics script in production
      // For development, we'll just log that it would be active
      console.log('Vercel Analytics would be active in production');
    }
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;
