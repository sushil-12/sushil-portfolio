import { useEffect } from 'react';
import { seoConfig } from '../config/seo';

const Analytics = () => {
  useEffect(() => {
    // Check if user has consented to analytics
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      console.log('🔍 Analytics: Waiting for cookie consent');
      return;
    }

    const preferences = JSON.parse(consent);
    if (!preferences.analytics) {
      console.log('🔍 Analytics: User has not consented to analytics');
      return;
    }

    console.log('🔍 Analytics component loaded');
    console.log('📊 Google Analytics ID:', seoConfig.googleAnalyticsId);
    console.log('🌐 Current URL:', window.location.href);
    console.log('📄 Page Title:', document.title);

    // Google Analytics 4 with GDPR compliance
    if (seoConfig.googleAnalyticsId && seoConfig.googleAnalyticsId !== 'G-XXXXXXXXXX') {
      console.log('✅ Initializing GDPR-compliant Google Analytics...');
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${seoConfig.googleAnalyticsId}`;
      
      script.onload = () => {
        console.log('✅ Google Analytics script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('❌ Failed to load Google Analytics script');
      };
      
      document.head.appendChild(script);

      // Initialize gtag with GDPR settings
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        console.log('📊 GA Event:', args);
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', seoConfig.googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        debug_mode: process.env.NODE_ENV === 'development',
        // GDPR Compliance Settings
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_flags: 'SameSite=None;Secure',
      });
      
      console.log('✅ GDPR-compliant Google Analytics configured successfully');
      
      // Send a test event
      setTimeout(() => {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          custom_parameter: 'portfolio_visit'
        });
        console.log('📊 Test page view event sent');
      }, 1000);
      
    } else {
      console.warn('⚠️ Google Analytics ID not configured or using placeholder');
    }

    // Vercel Analytics (if enabled)
    if (seoConfig.vercelAnalytics && typeof window !== 'undefined') {
      console.log('✅ Vercel Analytics enabled');
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
